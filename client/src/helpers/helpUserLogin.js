import axios from 'axios'
import { addressThatIUse } from '../URL/URL'
const currentAddress = addressThatIUse()
const URL = `${ currentAddress }/login`

export const helpUserLogin = (credentials) => {
  return axios
    .post(URL, credentials)
    .then(credential => credential)
    .then(response => response)
}
