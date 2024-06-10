import {useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {DeleteVacancy, GetVacanciesList} from "../../../api/services/vacancies.js";
import EmployerVacancyCard from "./EmployerVacancyCard.jsx";

const EmployerVacancies = () => {
  const {id} = useParams()
  const [vacancies, setVacancies] = useState([])
  const nav = useNavigate()

  useEffect(() => {
    GetVacanciesList()
      .then(res => {
        setVacancies(res.filter(item => item.employer_id === parseInt(id)))
      })
  }, [])

  const handleCreate = () => {
    nav(`/employers/${id}/vacancies/new`)
  }

  const handleDelete = (id) => {
    DeleteVacancy(id).then()
    setVacancies(vacancies.filter(vacancy => vacancy.id !== id))
  }

  return (
    <div className="flex flex-col items-center">
      {vacancies && vacancies.length === 0 && <div className="text-3xl font-bold text-center">
        Вакансий еще нет
      </div>}
      <button
        onClick={handleCreate}
        className="w-1/2 mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Создать новую вакансию
      </button>
      {vacancies && vacancies.map(vacancy => (
        <EmployerVacancyCard key={vacancy.id} id={id} vacancy={vacancy} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default EmployerVacancies;