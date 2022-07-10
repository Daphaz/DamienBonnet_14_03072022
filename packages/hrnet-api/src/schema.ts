import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { employeeResolver } from './employee';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...employeeResolver.mutation,
  },
});

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...employeeResolver.query,
  },
});

const schema = new GraphQLSchema({
  query,
  mutation,
});

export default schema;
