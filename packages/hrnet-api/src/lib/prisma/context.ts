import { IPrismaContext } from 'src/lib/ts';
import prisma from './client';

export const prismaContext: IPrismaContext = {
  prisma,
};
