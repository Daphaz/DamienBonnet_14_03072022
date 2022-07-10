import { IPrismaContext } from './prisma.interface';

export interface IApolloServerContext {
  prismaContext: IPrismaContext;
}
