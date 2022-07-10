import { Employee } from '@prisma/client';
import { CreateEmployeeDto } from './inputs';
import prisma from 'src/lib/prisma/client';

export const getAll = async (): Promise<Employee[]> => {
  return prisma.employee.findMany();
};

export const create = async (dto: CreateEmployeeDto): Promise<Employee> => {
  return prisma.employee.create({
    data: dto,
  });
};
