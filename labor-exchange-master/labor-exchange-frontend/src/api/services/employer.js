import {GetList, Create, Delete, Get, Update} from "../api.js";

const localhostNumber = 8002
const micName = "employers"

export function GetEmployerList() {
  return GetList(micName, localhostNumber)
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}

export function GetEmployer (id) {
  return Get(id, micName, localhostNumber)
    .then(res => {
      return {
        id: res.id,
        name: res.name,
        specialty: res.specialty,
        account_id: res.account_id
      }
    })
    .catch(err => {
      return err
    })
}

export function CreateEmployer (name, specialty, account_id) {
  const data = {
    name: name.toString(),
    specialty: specialty.toString(),
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

export function UpdateEmployer(id, name, specialty, account_id) {
  const data = {
    name: name.toString(),
    specialty: specialty.toString(),
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

export function DeleteEmployer(id) {
  return Delete(id, micName, localhostNumber)
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}