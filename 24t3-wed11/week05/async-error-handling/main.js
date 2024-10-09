const API_URL = 'https://jsonplaceholder.typicode.com'

function getUserByIdAndUsername(id, username) {
  return fetch(`${API_URL}/users/${id}`)
    .then(response => {
      if (response.status === 404) {
        return Promise.reject(new Error(`Could not find a user with id ${id}`))
      }
      console.log(response);
      return response.json();
    })
    .then(user => {
      if (user.username !== username) {
        throw new Error(`The user with id ${id} does not have username '${username}`);
      }
      return user;
    })
}

const resultElement = document.getElementById('result');
const body = document.body;

body.classList.add("loading");

getUserByIdAndUsername('1', 'fdfdsfdsafds')
  .then(user => {
    resultElement.innerText = JSON.stringify(user);
  })
  .catch(err => {
    alert(err);
  })
  .finally(() => {
    body.classList.replace('loading', 'done');
  })
