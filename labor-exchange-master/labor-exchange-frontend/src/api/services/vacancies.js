import {GetList, Create, Delete, Get, Update} from "../api.js";
import {formatDateFromBack} from "../../formatDate.js";

const localhostNumber = 8006
const micName = "vacancies"

export function GetVacanciesList() {
  return GetList(micName, localhostNumber)
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}

export function GetVacancy(id) {
  return Get(id, micName, localhostNumber)
    .then(res => {
      return {
        id: res.id,
        title: res.title,
        salary: res.salary,
        description: res.description,
        employer_id: res.employer_id
      }
    })
    .catch(err => {
      return err
    })
}

export function CreateVacancy(title, salary, description, employer_id) {
  const data = {
    title: title.toString(),
    salary: salary.toString(),
    description: description.toString(),
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

export function UpdateVacancy(id, title, salary, description, employer_id) {
  const data = {
    title: title.toString(),
    salary: salary.toString(),
    description: description.toString(),
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

export function DeleteVacancy(id) {
  return Delete(id, micName, localhostNumber)
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}