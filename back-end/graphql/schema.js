import {gql} from 'apollo-server-express/dist/index';

const typeDefs = gql`
  type Client{
      username : String
      id: String
  }
  type Query {
    create( username : String): Client
    get( id : String): Client
    update(id : String, username : String): Client
    delete( id : String):Client
    list: [Client]
  }
    type Mutation {
    changeStuff:String
  }`;

export default typeDefs;