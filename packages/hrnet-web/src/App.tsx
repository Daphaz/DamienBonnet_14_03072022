import { ApolloProvider } from '@apollo/client';
import { RouteObject, useRoutes } from 'react-router-dom';

import { useClient } from './common/client';
import { Layout } from './components';
import { EmployeePage, ErrorPage, HomePage } from './pages';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/employee',
    element: <EmployeePage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];

const App = () => {
  const apolloClient = useClient();
  const element = useRoutes(routes);

  return (
    <ApolloProvider client={apolloClient}>
      <Layout children={element} />
    </ApolloProvider>
  );
};

export default App;
