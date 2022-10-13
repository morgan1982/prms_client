import axios from 'axios';

let baseURL = '/'
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:8080'
}

export default axios.create({
  baseURL
})