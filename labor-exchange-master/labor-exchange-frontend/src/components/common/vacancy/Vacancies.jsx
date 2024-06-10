import {useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {GetVacanciesList} from "../../../api/services/vacancies.js";
import VacancyCard from "./VacancyCard.jsx";

const Vacancies = () => {
  const [vacancies, setVacancies] = useState([])

  useEffect(() => {
    GetVacanciesList()
      .then(res => {
        setVacancies(res)
      })
  }, [])

  return (
    <div className="flex flex-col items-center">
      {vacancies && vacancies.length === 0 && <div className="text-3xl font-bold text-center">
        Вакансий еще нет
      </div>}
      {vacancies && vacancies.map(vacancy => (
        <VacancyCard key={vacancy.id} vacancy={vacancy} />
      ))}
    </div>
  );
};

export default Vacancies;