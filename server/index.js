const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { typeDefs } = require('./schema/type-defs');
const { resolvers } = require('./schema/resolvers');

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  const { url } = await startStandaloneServer(server);
  console.log(`Server running at ${url}`);
};

startServer();
