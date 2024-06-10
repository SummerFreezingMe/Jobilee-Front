import Logo from "./Logo.jsx";
import {Link} from "react-router-dom";
import {deleteData} from "../../auth.js";
import {useNavigate} from "react-router";

const Navbar = ({isUserAuthenticate = false, menuItems = [
  {url: `/vacancies`, text: "Вакансии"},
  {url: `/vacancies`, text: "Компании"},
  {url: `/vacancies`, text: "Создать резюме"},
  {url: "/about", text: "О нас"}
]}) => {
  const nav = useNavigate()
  const handleLogout = () => {
    deleteData()
    nav("/")
    window.location.reload()
  }
  const handleLogin = () => {
    nav("/auth")
  }

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <Logo />

        <div id="mega-menu-icons" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.url}
                  className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
          <button
            onClick={isUserAuthenticate ? handleLogout : handleLogin}
            className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            {isUserAuthenticate ? "Выйти" : "Войти"}
          </button>
          <Link
            to={isUserAuthenticate ? "/favourites" : "/sign"}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {isUserAuthenticate ? "Избранное" : "Зарегистрироваться"}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;