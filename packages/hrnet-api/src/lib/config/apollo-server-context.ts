import { IApolloServerContext } from '../ts';
import { prismaContext } from '../prisma';

const apolloServerContext: IApolloServerContext = {
  prismaContext,
};

export default apolloServerContext;
