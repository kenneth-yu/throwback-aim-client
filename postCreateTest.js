const fetch = require('node-fetch');

fetch('http://localhost:3000/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: `bee_fighter${(Math.random() * 1000) + 1}`,
      password: 'password',
      logged_in: 'true'
    }
  })
})
  .then(r => r.json())
  .then(console.log)

