import {useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";
import EmployerFavoriteJobSeekerCard from "./EmployerFavoriteJobSeekerCard.jsx";
import {GetJobSeekerList} from "../../../api/services/jobSeeker.js";
import {CreateFavorite, DeleteFavorite, GetFavoriteList} from "../../../api/services/favorite.js";

const EmployerFavoriteJobSeekers = () => {
  const {id} = useParams()
  const [jobSeekers, setJobSeekers] = useState([])
  const [favorites, setFavorites] = useState([])
  const nav = useNavigate()

  useEffect(() => {
    GetJobSeekerList()
      .then(res => {
        const js = res
        setJobSeekers(res)
        GetFavoriteList(id)
          .then(res => {
            const fav = res
            setFavorites(res)

            const updatedJobSeekers = js.map(jobSeeker => {
              const favorite = fav.find(fav => fav.job_seeker_id === jobSeeker.id);
              if (favorite) {
                jobSeeker.favoriteId = favorite.id;
              }
              return jobSeeker;
            }).filter(jobSeeker => jobSeeker.favoriteId);

            setJobSeekers(updatedJobSeekers);
          })
      })

  }, [])

  const handleDislike = (id) => {
    DeleteFavorite(id).then(res => {
      setJobSeekers(jobSeekers.filter(js => js.id !== id))
    })
  }

  return (
    <div className="flex flex-col items-center">
      {jobSeekers && jobSeekers.length === 0 && <div className="text-3xl font-bold text-center">
        Соискателей еще нет
      </div>}
      {jobSeekers && jobSeekers.map(jobSeeker => (
        <EmployerFavoriteJobSeekerCard key={jobSeeker.id} id={id} jobSeeker={jobSeeker} favorites={favorites} onDelete={handleDislike} />
      ))}
    </div>
  );
};

export default EmployerFavoriteJobSeekers;