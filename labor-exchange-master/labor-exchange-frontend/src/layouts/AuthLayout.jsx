import {Link} from "react-router-dom";
import {useState} from "react";
import {Authenticate} from "../api/services/account.js";
import {setData} from "../auth.js";
import {useNavigate} from "react-router";
import Logo from "../components/common/Logo.jsx";

const AuthLayout = () => {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  const nav = useNavigate()

  const handleSend = (e) => {
    e.preventDefault()

    Authenticate(login, password)
      .then(res => {
        res && setData(res.id, res.role)
      })
      .then(() => {
        nav("/")
      })
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="mb-6">
          <Logo/>
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-l text-center font-thin leading-tight tracking-tight text-gray-500 md:text-2xl dark:text-gray-900">
              Добро пожаловать!
              Введите данные для входа
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSend}>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Электронная почта
                  <input
                    autoComplete="off"
                    type="text"
                    name="login"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Электронная почта"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Пароль
                  <input
                    autoComplete="off"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </label>
              </div>
              <button
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Войти
              </button>
              <div>
                Еще нет аккаунта? <Link className="underline" to="/sign">Зарегистрироваться</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;