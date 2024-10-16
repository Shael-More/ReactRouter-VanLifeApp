import { redirect } from 'react-router-dom';

export const requireAuth = async (request) => {
  const pathname = new URL(request.url).pathname;

  const isLoggedIn = localStorage.getItem('loggedin');
  if (!isLoggedIn) {
    const response = redirect(`/login?message=You must log in first.&redirectTo=${pathname}`);
    response.body = true;
    // return response
    return response
  }
  return null;
};
