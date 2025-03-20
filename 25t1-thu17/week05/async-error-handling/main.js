const API_URL = "https://jsonplaceholder.typicode.com";

function getUserByIdAndUsername(id, username) {
  return fetch(`${API_URL}/users/${id}`)
    .then((res) => {
      if (res.status === 404) {
        return Promise.reject(new Error(`Could not find a user with id ${id}`));
      } else if (!res.ok) {
        throw new Error(`Something went wrong when getting user with id ${id}`);
      }

      return res.json();
    })
    .then((user) => {
      if (username !== user.username) {
        throw new Error(
          `THe user with if ${id} does not have username ${username}`
        );
      }

      return user;
    });
}

const resultElement = document.getElementById("result");
const body = document.body;
const queryParams = new URLSearchParams(location.search);
console.log(queryParams);
body.classList.add("loading");

getUserByIdAndUsername(queryParams.get("id"), queryParams.get("username"))
  .then((user) => {
    resultElement.innerText = JSON.stringify(user, null, 4);
  })
  .catch((err) => {
    alert(`Error: ${err.message}`);
  })
  .finally(() => {
    body.classList.replace("loading", "done");
  });
