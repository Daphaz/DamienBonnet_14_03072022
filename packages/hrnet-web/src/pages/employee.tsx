import { Container, Spinner } from '@daphaz/hrnet-ui';

import { useGetAllEmployeeQuery } from '@/common/ts/schema';

export const EmployeePage = () => {
  const { data, loading, error } = useGetAllEmployeeQuery();

  if (loading) {
    return (
      <Container>
        <Spinner />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <h3>Error: {error.message}</h3>
      </Container>
    );
  }

  return (
    <>
      <pre>{JSON.stringify(data?.getAllEmployee)}</pre>
    </>
  );
};
