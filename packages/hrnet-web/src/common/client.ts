import { ApolloClient, InMemoryCache } from '@apollo/client';
import { useMemo } from 'react';

export const useClient = () => {
  const client = useMemo(
    () =>
      new ApolloClient({
        uri: process.env.REACT_APP_API_BASE_URL,
        cache: new InMemoryCache(),
      }),
    []
  );

  return client;
};
