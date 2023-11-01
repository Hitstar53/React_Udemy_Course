import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';
  if(mode !== 'login' && mode !== 'signup') {
    throw json({ error: 'Invalid mode' },{ status: 422 });
  }
  const data = await request.formData();
  let authData = {};
  if (mode === 'login') {
    authData = {
      email: data.get('email'),
      password: data.get('password'),
    };
  } else if (mode === 'signup') {
    authData = {
      email: data.get('email'),
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword'),
    };
  }
  console.log(authData);
  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: 'POST',
    body: JSON.stringify(authData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.status === 422 || response.status === 401) {
    return response;
  }
  if (!response.ok) {
    throw json({ error: 'Something went wrong' }, { status: 500 });
  }
  return redirect('/');
}