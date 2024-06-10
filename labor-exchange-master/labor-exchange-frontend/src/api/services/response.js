import {Create, Delete, Update, GetListById} from "../api.js";

const localhostNumber = 8005
const micName = "responses"

export function GetResponseList(id) {
  return GetListById(id, micName, localhostNumber)
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}

export function CreateResponse (job_seeker_id, vacancy_id) {
  const data = {
    job_seeker_id: parseInt(job_seeker_id),
    vacancy_id: parseInt(vacancy_id)
  }

  return Create(data, micName, localhostNumber)
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}

export function UpdateResponse(id, job_seeker_id, vacancy_id) {
  const data = {
    job_seeker_id: parseInt(job_seeker_id),
    vacancy_id: parseInt(vacancy_id)
  }

  return Update(id, data, micName, localhostNumber)
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}

export function DeleteResponse(id) {
  return Delete(id, micName, localhostNumber)
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}