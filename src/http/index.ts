import axios from 'axios';

const APIKEY = '7022536fdc5427f1fd9a2a1bfae55d22ed47ecca'
const SECRET = '0de4f4e955ba4d3e009b14a3ec9f75327d738a68'

const $instance = axios.create({
  baseURL: '/clean',
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Token " + APIKEY,
    "X-Secret": SECRET,
  }
})

export {$instance}