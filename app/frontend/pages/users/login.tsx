import { useState, useEffect, MouseEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { requestLogin } from '../../services/requestsFunctions';
import Alert from '../../components/Alert';
import { saveToken } from '../../services/storageFunctions';

function Login() {
  const [user, setUser] = useState({ email: '', password: '' });
  const [isDisable, setIsDisable] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const router = useRouter();

  const validate = () => {
    const { email, password } = user;
    const emailRegex = /^\S+@\S+\.\S+$/;
    const minLength = 5;
    const status = password.length > minLength && emailRegex.test(email);
    setIsDisable(!status);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    validate();
  };

  const login = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    return requestLogin(user)
      .then((data) => {
        saveToken(data.token);
        return router.push('/leaderboard');
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true);
      });
  };

  return (
    <div className="min-h-full flex">
      <div className="flex-1 justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          {notFound && (
            <Alert
              message="Email ou senha incorretos. Tente novamente!"
              closeAlert={() => setNotFound(!notFound)}
            />
          )}
          <div className="flex justify-center items-center">
            <img
              className="h-36 w-auto"
              src="https://user-images.githubusercontent.com/98190806/208769429-c2d517df-7ec5-419a-b27b-04aba2cbe09e.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Futebol Clube
            </h2>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {' '}
                    Email{' '}
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {' '}
                    Senha{' '}
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* TODO - Funcionalidade a ser implementada no backend */}
                {/*                 
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <Link
                      href="/users/register"
                      className="font-medium text-gray-900 hover:text-yellow-500"
                    >
                      {' '}
                      Ainda não possui conta? Registre-se!{' '}
                    </Link>
                  </div>
                </div> */}

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                    disabled={isDisable}
                    onClick={login}
                  >
                    Entrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://user-images.githubusercontent.com/98190806/208773831-ed677a16-62f1-4e05-b97a-ba568861252c.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Login;
