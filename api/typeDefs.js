import { gql } from 'apollo-server';

const typeDefs = gql`
  enum Role {
    ADMIN
    USER
  }

  type Message {
    id: ID
    text: String
  }

  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    role: Role
    message(id: ID!): Message
  }

  type Query {
    currentUser: User
  }
`;

export default typeDefs;