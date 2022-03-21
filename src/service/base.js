import axios from 'axios'

const ERR_OK = 0
const BASE_URL = '/'

axios.defaults.baseURL = BASE_URL

export function get (url, params) {
  return axios.get(url, {
    params
  }).then(res => {
    if (res.data.code === ERR_OK) {
      return res.data.result
    }
  }).catch(err => {
    console.log(err)
  })
}
