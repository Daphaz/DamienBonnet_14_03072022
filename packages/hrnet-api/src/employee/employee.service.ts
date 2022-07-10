import { Employee } from '@prisma/client';
import { CreateEmployeeDto } from './inputs';
import { prisma } from '../lib/prisma';

export const getAll = async (): Promise<Employee[]> => {
  return prisma.employee.findMany();
};

export const create = async (dto: CreateEmployeeDto): Promise<Employee> => {
  return prisma.employee.create({
    data: dto,
  });
};
