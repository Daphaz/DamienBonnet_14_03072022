import { IPrismaContext } from '../ts';
import { prisma } from './client';

export const prismaContext: IPrismaContext = {
  prisma,
};
