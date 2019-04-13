import { GraphQLServer } from 'graphql-yoga'
import './prisma'

/* setup the server */
// type definitions (schema (!: required))
const typeDefs = `
    type Query {
        hello: String!
        name: String!
    }
`

// resolvers
const resolvers = {
  Query: {
    hello() {
      return 'This is my first query!!'
    },
    name() {
      return 'My name is Americo Tomas de Agrela!!'
    }
  }
}

// declare and start the server (graphQL API)
const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => {
  console.log('The server is up at default http://localhost:4000/')
})
