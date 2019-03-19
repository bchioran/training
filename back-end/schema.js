import {gql} from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    hello: String
    goodbye: String
  }
  
    type Mutation {
    changeStuff:String
  }
  `;

export default typeDefs;