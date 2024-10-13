import React from 'react';
import { useRouteError } from 'react-router-dom';
const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className='text-3xl m-5'>
      <h1>Error: {error.message}</h1>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </div>
  );
};

export default ErrorPage;
