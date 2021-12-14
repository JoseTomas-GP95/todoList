import axios from 'axios'
import { addressThatIUse } from '../URL/URL'
const currentAddress = addressThatIUse()
const URL = `${currentAddress}/task`

export const helpPostTask = (token, post) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const request = axios.post(URL, post, config)
  return request.then(response => response.data)
}
