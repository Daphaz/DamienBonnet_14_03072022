import { Employee } from '@prisma/client';
import prismaMock from 'src/__tests__/__mocks__/prismaMock';
import { create } from 'src/employee/employee.service';

describe('employee service', () => {
  it('should create employee with passed in args', async () => {
    const mockEmployee: Employee = {
      id: 1,
      firstname: 'JTest',
      lastname: 'Ltest',
      birthday: new Date('1991-02-15'),
      startDate: new Date(),
      state: 'AL',
      department: 'Sales',
      street: null,
      city: null,
      zipCode: null,
    };

    prismaMock.employee.create.mockResolvedValue(mockEmployee);

    const { id: _id, ...dto } = mockEmployee;

    const employeeCreated = await create(dto);

    expect(employeeCreated).toBe(mockEmployee);
    expect(prismaMock.employee.create).toHaveBeenCalledTimes(1);
    expect(prismaMock.employee.create).toHaveBeenCalledWith({ data: dto });
  });
});
