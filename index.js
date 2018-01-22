// example.js
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./src/schema.js');

let port = 3000;
const app = express();
app.use('/', graphqlHTTP({
  schema: schema,
  graphiql: true //set to false if you don't want graphiql enabled
}));

app.listen(port);
console.log('GraphQL API server running at localhost:'+ port);

/* Here a simple schema is constructed using the GraphQL schema language (buildSchema). 
   More information can be found in the GraphQL spec release */
/*
let schema = buildSchema(`
  type Query {
    postTitle: String,
    blogTitle: String
  }
`);

// Root provides a resolver function for each API endpoint
let root = {
  postTitle: () => {
    return 'Build a Simple GraphQL Server With Express and NodeJS';
  },
  blogTitle: () => {
    return 'scotch.io';
  }
};
*/

