import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLScalarType,
} from 'graphql';
import { GraphQLDate } from 'graphql-iso-date';

const GqlEmployee: GraphQLObjectType = new GraphQLObjectType({
  name: 'Employee',
  description: 'A employee',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'id of the employee',
    },
    firstname: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'firstname of the employee',
    },
    lastname: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'lastname of the employee',
    },
    birthday: {
      type: new GraphQLNonNull(GraphQLDate as unknown as GraphQLScalarType),
      description: 'birthday of the employee',
    },
    startDate: {
      type: new GraphQLNonNull(GraphQLDate as unknown as GraphQLScalarType),
      description: 'startDate of the employee',
    },
    street: {
      type: GraphQLString,
      description: 'street of the employee',
    },
    city: {
      type: GraphQLString,
      description: 'city of the employee',
    },
    state: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'state of the employee',
    },
    zipCode: {
      type: GraphQLInt,
      description: 'zipCode of the employee',
    },
    department: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'department of the employee',
    },
  },
});

export default GqlEmployee;
