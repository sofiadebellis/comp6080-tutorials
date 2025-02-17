const API_URL = "https://jsonplaceholder.typicode.com";

function getUserByIdAndUsername(id, username) {
  return fetch(`${API_URL}/users/${id}`)
    .then(res => {
      if (res.status === 404) {
        return Promise.reject(new Error(`Could not find a user with id: ${id}`))
      } else if (!res.ok) {
        throw new Error(`Something went wrong when getting user with id ${id}`)
      }
      return res.json()
    })
    .then(data => {
      if (data.username !== username) {
        throw new Error(`The user with id ${id} does not have username '${username}'`)
      }
      console.log(data);
      return data;
    })

}

const resultElement = document.getElementById('result');
const body = document.body;

body.classList.add('loading');

getUserByIdAndUsername('1', 'Bret')
  .then(data => {
    console.log(JSON.stringify(data))
    console.log(resultElement)
    resultElement.innerText = JSON.stringify(data);
  })
  .catch(e => {
    alert(e)
  })
  .finally(() => {
    body.classList.replace('loading', 'done');
  })
