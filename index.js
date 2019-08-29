var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var User = require('./sql/user');

// 使用 GraphQL Schema Language 创建一个 schema
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// root 提供所有 API 入口端点相应的解析器函数
var root = {
    hello: () => {
        return 'Hello world!';
    },
};

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.get('/users/:userid',function(req,res){
    var userid = req.params.userid;
    var user = new User();
    user.find(userid,function(err,result){
        if(err){
            res.send('not found');
        }
        // res.send(result.length === 1 ? result[0]:result);
    });

});
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');