import axios from 'axios'

export const helpGetTypeTasks = (URL) => {
  return axios
    .get(URL)
    .then((tasks) => tasks)
    .then(response => response)
}
