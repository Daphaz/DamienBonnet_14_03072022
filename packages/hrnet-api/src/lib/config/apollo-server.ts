import context from './apollo-server-context';
import schema from '../../schema';

const apolloServerConfig = {
  schema,
  debug: process.env.NODE_ENV === 'development',
  context,
};

export default apolloServerConfig;
