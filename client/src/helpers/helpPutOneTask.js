import axios from 'axios'

export const helpPutOneTask = (URL, editedPost) => {
  return axios
    .put(URL, editedPost)
    .then(edited => edited)
    .then(response => response)
}
