import axios from 'axios'

export const helpDeleteTypeTasks = (URL) => {
  return axios
    .delete(URL)
    .then((tasks) => tasks)
    .then(response => response)
}
