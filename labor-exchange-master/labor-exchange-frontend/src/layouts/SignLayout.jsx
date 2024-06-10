import {Link} from "react-router-dom";
import {useState} from "react";
import {useNavigate} from "react-router";
import Logo from "../components/common/Logo.jsx";
import {CreateAccount} from "../api/services/account.js";
import {CreateJobSeeker} from "../api/services/jobSeeker.js";
import {CreateEmployer} from "../api/services/employer.js";

const SignLayout = () => {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState('job_seeker')

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const nav = useNavigate()

  const handleSend = (e) => {
    e.preventDefault()

    CreateAccount(login, password, role)
      .then(res => {
        if (role === "job_seeker") {
          CreateJobSeeker("", "01-01-2000", "", "", "", "", res.id)
            .catch(err => console.log(err))
        }
        else {
          CreateEmployer("", "", res.id)
            .catch(err => console.log(err))
        }
      })
      .then(() => {
        nav("/auth")
      })
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-50">
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
                  Имя
                  <input
                    autoComplete="off"
                    type="text"
                    name="name"
                    className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Имя"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Фамилия
                  <input
                    autoComplete="off"
                    type="text"
                    name="surname"
                    id="surname"
                    placeholder="Фамилия"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </label>
              </div>
              <div>
                <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Электронная почта
                  <input
                      autoComplete="off"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Почта"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              <div>
                <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Повторите пароль
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
              <div className="flex items-center mb-4">
                <label className="flex items-center text-sm text-gray-900 dark:text-white">
                  <input
                    type="radio"
                    name="role"
                    value="job_seeker"
                    checked={role === 'job_seeker'}
                    onChange={handleRoleChange}
                    className="mr-2"
                  />
                  Соискатель
                </label>
                <label className="flex items-center text-sm text-gray-900 dark:text-white">
                  <input
                    type="radio"
                    name="role"
                    value="employer"
                    checked={role === 'employer'}
                    onChange={handleRoleChange}
                    className="ml-4 mr-2"
                  />
                  Работодатель
                </label>
              </div>

              <button
                  onClick={CreateAccount}
                className="w-full text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Регистрация
              </button>
              <div>
                Уже есть аккаунт? <Link className="underline" to="/auth">Войти</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignLayout;