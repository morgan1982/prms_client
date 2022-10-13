import axios from '../config/axiosConfing';

const path = '/api/v1'
// TODO: add the token to the parameter and the request when the login is ready
export const getListOfPatients = async () => {
  const url = `${path}/patients`
  
  return await axios.get(url)
}

