import React from 'react';
import {
  useLoaderData,
  Form,
  redirect,
  useActionData,
  useNavigation,
} from 'react-router-dom';
import { loginUser } from '../api';

export const loader = async ({ request }) => {
  return new URL(request.url).searchParams.get('message');
  // return null
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"

  try {
    const data = await loginUser({ email, password });
    localStorage.setItem('loggedin', true);
    return redirect(pathname);
  } catch (error) {
    console.log(error)
  }
  return null
};

const Login = () => {
  const message = useLoaderData();
  const errorMessage = useActionData();
  console.log(errorMessage)
  const navigation = useNavigation(); // contains info about page navigation

  return (
    <div className='flex flex-col items-center p-8'>
      <h1 className='text-3xl font-bold mb-5'>Sign in to your account</h1>
      {message && (
        <h3 className=' text-2xl font-bold mb-5 text-red-500'>{message}</h3>
      )}

      {/* {errorMessage && (
        <h3 className=' text-xl font-bold mb-5 text-red-500'>{errorMessage}</h3>
      )}  */}
      <Form method='post' className='flex flex-col w-full max-w-lg' replace>
        <input
          name='email'
          type='email'
          placeholder='Email Address'
          className='border-2 border-black h-[40px] indent-2 font-semibold focus:outline-none mb-1 rounded-md'
        />
        <input
          name='password'
          type='password'
          placeholder='Password'
          className='border-2 border-black h-[40px] indent-2 font-semibold focus:outline-none rounded-md'
        />
        <button
          disabled={navigation.state === 'submitting'}
          className={
            navigation.state === 'submitting'
              ? 'bg-gray-500 text-white  border-none rounded-md h-[55px] mt-5'
              : ` bg-[#ff8c38] border-none rounded-md h-[55px] mt-5 text-white`
          }
        >
          {navigation.state === 'submitting' ? 'Logging in' : 'Log in'}
        </button>
      </Form>
    </div>
  );
};

export default Login;
