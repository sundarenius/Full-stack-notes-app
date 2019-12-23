import axios from 'axios'

export const API = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar'
  }
})

export const USER = axios.create({
  baseURL: 'http://localhost:3000/login',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar'
  }
})
