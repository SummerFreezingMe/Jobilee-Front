import {Outlet} from "react-router";
// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from "react";
import {getData} from "../auth.js";
import Navbar from "../components/common/Navbar.jsx";
import {GetEmployerList} from "../api/services/employer.js";
import {GetJobSeekerList} from "../api/services/jobSeeker.js";
import main_image from "../assets/main_stock.jpeg"

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
        <div className="row">
          <div className="column">
            <img src={main_image} alt="main" width="500" height="300"/>
          </div>
          <div className="column">
            <font color="#0b3594" size="5" face="Playfair Display"><strong>Ищите работу - мы здесь чтобы помочь!</strong></font>
          </div>
        </div>


      </main>
    </>
  );
};

export default MainLayout;