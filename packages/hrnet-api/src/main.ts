import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv-safe';
import { performAstCodegen } from './codegen';
import apolloServerConfig from './lib/config/apollo-server';

dotenv.config();

const startServer = () => {
  performAstCodegen();

  const server = new ApolloServer(apolloServerConfig);

  server
    .listen(process.env.PORT)
    .then(({ url }) => {
      console.log(`🚀 Server ready at ${url}graphql`);
    })
    .catch(err => console.log('Error lauching server', err));
};

startServer();
