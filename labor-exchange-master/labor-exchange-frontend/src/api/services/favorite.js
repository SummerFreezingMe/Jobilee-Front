import {Create, Delete, Update, GetListById} from "../api.js";

const localhostNumber = 8003
const micName = "favorites"

export function GetFavoriteList(id) {
  return GetListById(id, micName, localhostNumber)
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}

export function CreateFavorite (job_seeker_id, employer_id) {
  const data = {
    job_seeker_id: parseInt(job_seeker_id),
    employer_id: parseInt(employer_id)
  }

  return Create(data, micName, localhostNumber)
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}

export function UpdateFavorite(id, job_seeker_id, employer_id) {
  const data = {
    job_seeker_id: parseInt(job_seeker_id),
    employer_id: parseInt(employer_id)
  }

  return Update(id, data, micName, localhostNumber)
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}

export function DeleteFavorite(id) {
  return Delete(id, micName, localhostNumber)
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}