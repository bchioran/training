const express = require('express');
const app = express();
const port = 8000;
const {graphql, buildSchema} = require('graphql');
const graphqlHTTP = require('express-graphql');

app.get('/', (req, res) => res.send('Hello Bogdi, from Express !'));


// Construct a schema, using GraphQL schema language
let schema = buildSchema(`
  type Query {
    hello: String
    goodbye: String
  }
`);

// The root provides a resolver function for each API endpoint
let root = {
    hello: () => {
        return 'Hello Bogdi, From GraphQL!';
    },
    goodbye: () => {
        return 'Goodbye Bogdi, From GraphQL!';
    },
};

// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, '{ hello }', root).then((response) => {
    console.log(response);
});
graphql(schema, '{ goodbye }', root).then((response) => {
    console.log(response);
});

app.use('/graphQL', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
console.log('GraphQL API Server up and running at localhost:' + port);
