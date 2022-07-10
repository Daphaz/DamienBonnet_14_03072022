import {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLScalarType,
  GraphQLString,
} from 'graphql';
import { GraphQLDate } from 'graphql-iso-date';

const CreateEmployeeInput = new GraphQLInputObjectType({
  name: 'CreateEmployeeInput',
  description: 'create employee input',
  fields: {
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

export interface CreateEmployeeDto {
  firstname: string;
  lastname: string;
  birthday: Date;
  startDate: Date;
  street: string | null;
  city: string | null;
  state: string;
  zipCode: number | null;
  department: string;
}

export default CreateEmployeeInput;
