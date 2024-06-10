import React, {useEffect, useState} from "react";
import {GetVacanciesList} from "../../../api/services/vacancies.js";
import JobSeekerVacancyCard from "./JobSeekerVacancyCard.jsx";
import {useParams} from "react-router";
import {CreateResponse} from "../../../api/services/response.js";

const JobSeekerVacancies = () => {
  const {id} = useParams()
  const [vacancies, setVacancies] = useState([])

  useEffect(() => {
    GetVacanciesList()
      .then(res => {
        setVacancies(res)
      })
  }, [])

  const handleResponse = (_id) => {
    CreateResponse(parseInt(id), _id).then()
  }

  return (
    <div className="flex flex-col items-center">
      {vacancies && vacancies.length === 0 && <div className="text-3xl font-bold text-center">
        Вакансий еще нет
      </div>}
      {vacancies && vacancies.map(vacancy => (
        <JobSeekerVacancyCard key={vacancy.id} vacancy={vacancy} handleResponse={() => handleResponse(vacancy.id)} />
      ))}
    </div>
  );
};

export default JobSeekerVacancies;