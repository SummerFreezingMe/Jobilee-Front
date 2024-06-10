import {useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {DeleteVacancy, GetVacanciesList} from "../../../api/services/vacancies.js";
import EmployerJobSeekerCard from "./EmployerJobSeekerCard.jsx";
import {GetJobSeekerList} from "../../../api/services/jobSeeker.js";
import {CreateFavorite, GetFavoriteList} from "../../../api/services/favorite.js";

const EmployerJobSeekers = () => {
  const {id} = useParams()
  const [jobSeekers, setJobSeekers] = useState([])
  const [favorites, setFavorites] = useState([])
  const nav = useNavigate()

  useEffect(() => {
    GetJobSeekerList()
      .then(res => {
        setJobSeekers(res)
      })
    GetFavoriteList(id)
      .then(res => {
        setFavorites(res)
      })
  }, [])

  const handleLike = (_id) => {
    CreateFavorite(_id, id).then(res => {
      setFavorites(prevState => [
        ...prevState,
        res
      ])
    })
  }

  return (
    <div className="flex flex-col items-center">
      {jobSeekers && jobSeekers.length === 0 && <div className="text-3xl font-bold text-center">
        Соискателей еще нет
      </div>}
      {jobSeekers && jobSeekers.map(jobSeeker => (
        <EmployerJobSeekerCard key={jobSeeker.id} id={id} jobSeeker={jobSeeker} favorites={favorites} onLike={handleLike} />
      ))}
    </div>
  );
};

export default EmployerJobSeekers;