import { IApolloServerContext } from 'src/lib/ts';
import { prismaContext } from 'src/lib/prisma/context';

const apolloServerContext: IApolloServerContext = {
  prismaContext,
};

export default apolloServerContext;
