import {Auth, Create, Delete, Get, Update} from "../api.js";

const localhostNumber = 8080
const micName = "accounts"

export function Authenticate (login, password) {
  const data = {
    login: login.toString(),
    password: password.toString()
  }

  return Auth(data, micName, localhostNumber)
    .then(res => {
      return {
        id: res.id,
        role: res.role
      }
    })
    .catch(err => {
      return err
    })
}

export function GetAccount (id) {
  return Get(id, micName, localhostNumber)
    .then(res => {
      return {
        id: res.id,
        login: res.login,
        password: res.password,
        role: res.role
      }
    })
    .catch(err => {
      return err
    })
}

export function CreateAccount (login, password, role) {
  const data = {
    login: login.toString(),
    password: password.toString(),
    role: role.toString()
  }

  return Create(data, micName, localhostNumber)
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}

export function UpdateAccount(id, login, password, role) {
  const data = {
    login: login.toString(),
    password: password.toString(),
    role: role.toString()
  }

  return Update(id, data, micName, localhostNumber)
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}

export function DeleteAccount(id) {
  return Delete(id, micName, localhostNumber)
    .then(res => {
      return res
    })
    .catch(err => {
      return err
    })
}