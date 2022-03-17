import axios from 'axios'

const BASE_URL = 'http://rakez.herokuapp.com/'

export const createEmployee = async (data) => {
  return await axios
    .post(BASE_URL + '/api/employees', data)
    .then((res) => res)
    .catch((err) => err)
}

export const getAllEmployees = async () => {
  return await axios
    .get(BASE_URL + '/api/employees')
    .then((res) => res)
    .catch((err) => err)
}
