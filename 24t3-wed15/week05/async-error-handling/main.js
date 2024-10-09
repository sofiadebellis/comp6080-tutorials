const API_URL = "https://jsonplaceholder.typicode.com";

function getUserByIdAndUsername(id, username) {
  return fetch(`${API_URL}/users/${id}`)
    .then((res) => {
      console.log(res);
      if (res.status === 404) {
        return Promise.reject(new Error(`Could not find a user with id ${id}`));
      } else if (!res.ok) {
        return Promise.reject(
          new Error(`Something went wrong when getting user with id ${id}`)
        );
      }

      return res.json();
    })
    .then((data) => {
      console.log(data);
      if (username !== data.username) {
        throw new Error(
          `The user with id ${id} does not have username '${username}'`
        );
      }

      return data;
    });
}

const resultElement = document.getElementById('result');
const body = document.body;

body.classList.add('loading');
const params = new URLSearchParams(location.search)
console.log(params)

getUserByIdAndUsername("1", "Bret")
  .then(user => {
    resultElement.innerText = JSON.stringify(user)
  })
  .catch(e => {
    alert(e);
  })
  .finally(() => {
    body.classList.replace('loading', 'done')
  })