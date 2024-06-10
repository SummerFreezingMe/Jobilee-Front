import React, {useEffect, useState} from "react";
import {GetVacanciesList} from "../../../api/services/vacancies.js";
import JobSeekerResponsesVacancyCard from "./JobSeekerResponsesVacancyCard.jsx";
import {useParams} from "react-router";
import {DeleteResponse, GetResponseList} from "../../../api/services/response.js";

const JobSeekerResponsesVacancies = () => {
  const {id} = useParams()
  const [vacancies, setVacancies] = useState([])
  const [responses, setResponses] = useState([])

  useEffect(() => {
    GetVacanciesList()
      .then(res => {
        const vacanciesRes = res
        setVacancies(res)
        GetResponseList(id)
          .then(res => {
            const responsesRes = res
            setResponses(res)
            const updatedVacancies = []
            vacanciesRes.forEach(vacancy => {
              const responseForVacancy = responsesRes.find(response => response.vacancy_id === vacancy.id);
              if (responseForVacancy) {
                updatedVacancies.push({
                  ...vacancy,
                  responseId: responseForVacancy.id,
                })
              }
            })
            setVacancies(updatedVacancies);
          })
      })

  }, [])

  const handleDeleteResponse = (id) => {
    DeleteResponse(id).then(() => {
      setVacancies(vacancies.filter(v => v.id !== id))
    })
    window.location.reload()
  }

  return (
    <div className="flex flex-col items-center">
      {vacancies && vacancies.length === 0 && <div className="text-3xl font-bold text-center">
        Вакансий еще нет
      </div>}
      {vacancies && vacancies.map(vacancy => (
        <JobSeekerResponsesVacancyCard key={vacancy.id} vacancy={vacancy} handleDeleteResponse={() => handleDeleteResponse(vacancy.responseId)} />
      ))}
    </div>
  );
};

export default JobSeekerResponsesVacancies;