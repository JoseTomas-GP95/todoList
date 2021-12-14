import axios from 'axios'
import { addressThatIUse } from '../URL/URL'
const currentAddress = addressThatIUse()

const URL = `${ currentAddress }/user`

export const helpCreateUser = (userObject) => {
  return axios
    .post(URL, userObject)
    .then(user => user)
    .then(response => response)
}
