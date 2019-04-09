import express from 'express';
import {ApolloServer, gql} from 'apollo-server-express';
import graphqlHTTP from 'express-graphql';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/schema';
import mongoose from "mongoose";

const port = 8081;
const server = new ApolloServer({typeDefs, resolvers});
const app = express();
mongoose.connect('mongodb://localhost/training');


app.get('/graphql', graphqlHTTP({
    schema: typeDefs,
    graphiql: true
}));

server.applyMiddleware({app});

app.listen({port: port}, () =>
    console.log(`Apollo Server ready at http://localhost:${port}${server.graphqlPath}`)
);
