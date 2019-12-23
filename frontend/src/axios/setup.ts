import axios from 'axios'

const base = window.location.origin.includes('localhost') ? 'http://localhost:3000' : window.location.origin
export const API = axios.create({
  baseURL: `${base}/api`,
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar'
  }
})

export const USER = axios.create({
  baseURL: `${base}/login`,
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar'
  }
})
