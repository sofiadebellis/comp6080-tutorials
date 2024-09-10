const ul = document.createElement('ul');
document.body.appendChild(ul);

const li = document.createElement('li');
ul.appendChild(li);
li.innerText = 'hayden';

fetch('http://localhost:3000/users');
fetch('http://localhost:3000/user/0');