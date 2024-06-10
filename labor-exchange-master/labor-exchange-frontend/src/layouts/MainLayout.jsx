import {Outlet, useNavigate} from "react-router";
import {useEffect, useState} from "react";
import {getData} from "../auth.js";
import Navbar from "../components/common/Navbar.jsx";
import {GetEmployerList} from "../api/services/employer.js";
import {GetJobSeekerList} from "../api/services/jobSeeker.js";

const MainLayout = () => {
  const [account, setAccount] = useState(null)

  const [isAuth, setIsAuth] = useState(false)
  const [menuItems, setMenuItems] = useState([
    {url: `/vacancies`, text: "Вакансии"},
    {url: `/vacancies`, text: "Компании"},
    {url: `/vacancies`, text: "Создать резюме"},
    {url: "/about", text: "О нас"}
  ])

  useEffect(() => {
    let id
    const acc = getData()
    setAccount(acc)
    if (acc !== -1) {
      setIsAuth(true)
      if (acc.role === "employer") {
        GetEmployerList()
          .then(res => {
            res.forEach(employer => {
              if (employer.account_id === acc.id) id = employer.account_id
            })
          })
          .then(() => {
            const items = [
              {url: `/employers/${id}/info`, text: "Информация"},
              {url: `/employers/${id}/vacancies`, text: "Ваши вакансии"},
              {url: `/employers/${id}/job_seekers`, text: "Соискатели"},
              {url: `/employers/${id}/favorites`, text: "Избранное"},
              {url: `/employers/${id}/analytic`, text: "Аналитика"},
              {url: "/about", text: "О нас"}
            ]
            setMenuItems(items)
          })
      }
      else {
        GetJobSeekerList()
          .then(res => {
            res.forEach(jobSeeker => {
              if (jobSeeker.account_id === acc.id) id = jobSeeker.account_id
            })
          })
          .then(() => {
            const items = [
              {url: `/job_seekers/${id}/info`, text: "Информация"},
              {url: `/job_seekers/${id}/vacancies`, text: "Вакансии"},
              {url: `/job_seekers/${id}/responses`, text: "Ваши отклики"},
              {url: `/job_seekers/${id}/analytic`, text: "Аналитика"},
              {url: "/about", text: "О нас"}
            ]
            setMenuItems(items)
          })
      }
    }
  }, [])

  return (
    <>
      <header>
        {account && <Navbar isUserAuthenticate={isAuth} menuItems={menuItems} />}
      </header>
      <main className="my-3">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;