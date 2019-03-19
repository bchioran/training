import express from 'express';
import {ApolloServer, gql} from 'apollo-server-express';
import graphqlHTTP from 'express-graphql';
import resolvers from './resolvers';
import typeDefs from './schema';

const port = 8000;
const server = new ApolloServer({typeDefs, resolvers});
const app = express();

app.get('/graphql', graphqlHTTP({
    schema: typeDefs,
    graphiql: true
}));

server.applyMiddleware({app});

app.listen({port: port}, () =>
    console.log(`Apollo Server ready at http://localhost:${port}${server.graphqlPath}`)
);