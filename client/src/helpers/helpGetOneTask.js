import axios from 'axios'

export const helpGetOneTask = (URL) => {
  return axios
    .get(URL)
    .then((task) => task)
    .then(response => response)
}
