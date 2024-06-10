export function setData(id, role) {
  localStorage.setItem("id", id.toString())
  localStorage.setItem("role", role)
}

export function getData() {
  const id = localStorage.getItem("id")

  if (id) return {
    id: parseInt(id),
    role: localStorage.getItem("role")
  }
  else return -1
}

export function deleteData() {
  localStorage.removeItem("id")
  localStorage.removeItem("role")
}