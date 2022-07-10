import { GraphQLList, GraphQLNonNull } from 'graphql';
import GqlEmployee from './employee.gql';
import { IApolloServerContext } from 'src/lib/ts';
import { create, getAll } from './employee.service';
import { Employee } from '@prisma/client';
import CreateEmployeeInput, {
  CreateEmployeeDto,
} from './inputs/create-employee';

/**
 *  Query
 */
const getAllEmployee = {
  type: new GraphQLList(GqlEmployee),
  resolve: async (
    _source: unknown,
    _args: unknown,
    _context: IApolloServerContext,
    _info: unknown
  ): Promise<Employee[]> => {
    return getAll();
  },
};

/**
 *  Mutation
 */
const createEmployee = {
  type: GqlEmployee,
  args: {
    input: {
      type: new GraphQLNonNull(CreateEmployeeInput),
      description: 'Employee input to be created',
    },
  },
  resolve: async (
    _source: unknown,
    { input: dto }: { input: CreateEmployeeDto },
    _context: IApolloServerContext
  ): Promise<Employee> => {
    return create(dto);
  },
};

const employeeResolver = {
  query: {
    getAllEmployee,
  },
  mutation: {
    createEmployee,
  },
};

export default employeeResolver;
