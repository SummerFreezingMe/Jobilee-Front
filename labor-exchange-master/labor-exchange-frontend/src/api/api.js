import axios from 'axios';

export async function Auth(data, micName, localhostNumber) {
  try {
    const response = await axios.post(`http://localhost:${localhostNumber}/${micName}/auth`, data);
    return response.data;
  } catch (error) {
    console.error('Error creating:', error);
    throw error;
  }
}

export async function GetList(micName, localhostNumber) {
  try {
    const response = await axios.get(`http://localhost:${localhostNumber}/${micName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching list:', error);
    throw error;
  }
}

export async function GetListById(_id, micName, localhostNumber) {
  const id = parseInt(_id);
  try {
    const response = await axios.get(`http://localhost:${localhostNumber}/${micName}/list/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching list:', error);
    throw error;
  }
}

export async function Get(_id, micName, localhostNumber) {
  const id = parseInt(_id);
  try {
    const response = await axios.get(`http://localhost:${localhostNumber}/${micName}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching by ID:', error);
    throw error;
  }
}

export async function Create(data, micName, localhostNumber) {
  try {
    const response = await axios.post(`http://localhost:${localhostNumber}/${micName}`, data);
    return response.data;
  } catch (error) {
    console.error('Error creating:', error);
    throw error;
  }
}

export async function Update(_id, data, micName, localhostNumber) {
  const id = parseInt(_id);
  try {
    const response = await axios.put(`http://localhost:${localhostNumber}/${micName}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating:', error);
    throw error;
  }
}

export async function Delete(_id, micName, localhostNumber) {
  const id = parseInt(_id);
  try {
    const response = await axios.delete(`http://localhost:${localhostNumber}/${micName}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting:', error);
    throw error;
  }
}