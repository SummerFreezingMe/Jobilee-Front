import {Create, Delete, Get, GetList, Update} from "../api.js";
import {formatDateFromBack, formatDateFromFront} from "../../formatDate.js";

const localhostNumber = 8004
const micName = "job_seekers"

export function GetJobSeekerList() {
  return GetList(micName, localhostNumber)
    .then(res => {
      return res.map((item) => ({
        ...item,
        birth_date: formatDateFromBack(item.birth_date),
      }))
    })
    .catch(err => {
      return err
    })
}

export function GetJobSeeker (id) {
  return Get(id, micName, localhostNumber)
    .then(res => {
      return {
        id: res.id,
        full_name: res.full_name,
        birth_date: formatDateFromBack(res.birth_date),
        contact_details: res.contact_details,
        position: res.position,
        education: res.education,
        experience: res.experience,
        account_id: res.account_id
      }
    })
    .catch(err => {
      return err
    })
}

export function CreateJobSeeker (full_name, birth_date, contact_details, position, education, experience, account_id) {
  const data = {
    full_name: full_name.toString(),
    birth_date: formatDateFromFront(birth_date),
    contact_details: contact_details.toString(),
    position: position.toString(),
    education: education.toString(),
    experience: experience.toString(),
    account_id: parseInt(account_id)
  }

  return Create(data, micName, localhostNumber)
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}

export function UpdateJobSeeker(id, full_name, birth_date, contact_details, position, education, experience, account_id) {
  const data = {
    full_name: full_name.toString(),
    birth_date: formatDateFromFront(birth_date),
    contact_details: contact_details.toString(),
    position: position.toString(),
    education: education.toString(),
    experience: experience.toString(),
    account_id: parseInt(account_id)
  }

  return Update(id, data, micName, localhostNumber)
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}

export function DeleteJobSeeker(id) {
  return Delete(id, micName, localhostNumber)
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}