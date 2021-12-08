import axios from 'axios'
const URL = 'http://localhost:3001/task'

export const helpPostTask = (token, post) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const request = axios.post(URL, post, config)
  return request.then(response => response.data)
}
