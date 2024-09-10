const API_URL = 'https://jsonplaceholder.typicode.com'

function getPostAndUser(postId) {
  return Promise.resolve()
}

getPostAndUser(1).then(result => {
  console.log(result)
})

function getAllPosts() {
  return Promise.resolve()
}

getAllPosts().then(posts => {
  console.log(posts)
})
