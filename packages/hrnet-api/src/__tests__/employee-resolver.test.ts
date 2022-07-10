import { ApolloServer, gql } from 'apollo-server';
import apolloServerConfig from 'src/lib/config/apollo-server';
import { CreateEmployeeInput } from 'src/graphql/graphql';
import { prismaContext } from 'src/lib/prisma/context';

const CREATE_EMPLOYEE_MUTATION = gql`
  mutation CreateEmployee($input: CreateEmployeeInput!) {
    createEmployee(input: $input) {
      __typename
      id
      firstname
      lastname
      birthday
      startDate
      street
      city
      state
      zipCode
      department
    }
  }
`;

describe('employee resolver', () => {
  let server: ApolloServer;
  const typename = 'Employee';

  beforeAll(() => {
    server = new ApolloServer(apolloServerConfig);
  });

  afterAll(async () => {
    prismaContext.prisma.employee.deleteMany();
    await prismaContext.prisma.$disconnect();
  });

  it('should create a employee using the mutation', async () => {
    const mockEmployee: CreateEmployeeInput = {
      firstname: 'Jhon',
      lastname: 'Doe',
      birthday: '2022-06-15',
      startDate: '2022-06-15',
      department: 'Sales',
      state: 'AL',
    };

    const result = await server.executeOperation({
      query: CREATE_EMPLOYEE_MUTATION,
      variables: { input: mockEmployee },
    });

    expect(result.data).toBeDefined();
    expect(result?.data?.createEmployee).toBeDefined();
    const createdEmployee = result?.data?.createEmployee;
    expect(createdEmployee.__typename).toBe(typename);
    expect(createdEmployee.id).toBeDefined();
    expect(createdEmployee.firstname).toBe(mockEmployee.firstname);
    expect(createdEmployee.lastname).toBe(mockEmployee.lastname);
    expect(createdEmployee.birthday).toBe(mockEmployee.birthday);
    expect(createdEmployee.startDate).toBe(mockEmployee.startDate);
    expect(createdEmployee.state).toBe(mockEmployee.state);
  });
});
