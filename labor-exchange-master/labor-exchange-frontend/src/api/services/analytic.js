import axios from "axios";
import {GetVacanciesList} from "./vacancies.js";
import {GetEmployerList} from "./employer.js";
import {GetJobSeekerList} from "./jobSeeker.js";

const localhostNumber = 8001
const micName = "analytics"

async function GetAnalytic(type) {
  try {
    const response = await axios.get(`http://localhost:${localhostNumber}/${micName}/${type}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching list:', error);
    throw error;
  }
}

function GetVacancyAnalytic() {
  return GetAnalytic("vacancy")
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}

function GetEmployerAnalytic() {
  return GetAnalytic("employer")
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}

function GetJobSeekerAnalytic() {
  return GetAnalytic("job_seeker")
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}

const getItemName = (id, array, field) => {
  if (array.length > 0) {
    const item = array.find(i => i.id.toString() === id.toString());
    return item ? item[field] : "";
  }
}

export async function GetVacancyAnalyticTable(id) {
  let vacancies = await GetVacanciesList()
  vacancies = vacancies.filter(v => v.employer_id === id)
  const analytic = await GetVacancyAnalytic()

  return Object.entries(analytic).map(([vacancyID, count]) => ({
    name: getItemName(vacancyID, vacancies, "title"),
    count: count
  }))
}

export async function GetEmployerAnalyticTable() {
  const employers = await GetEmployerList()
  const analytic = await GetEmployerAnalytic()

  return Object.entries(analytic).map(([employerID, count]) => ({
    name: getItemName(employerID, employers, "name"),
    count: count
  }))
}

export async function GetJobSeekerAnalyticTable() {
  const jobSeekers = await GetJobSeekerList()
  const analytic = await GetJobSeekerAnalytic()

  return Object.entries(analytic).map(([jobSeekerID, count]) => ({
    name: getItemName(jobSeekerID, jobSeekers, "full_name"),
    count: count
  }))
}