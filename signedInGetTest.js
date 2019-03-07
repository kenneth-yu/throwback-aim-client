const fetch = require('node-fetch');

fetch('http://localhost:3000/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: `snorlax`,
      password: '123'
    }
  })
})
  .then(r => r.json())
  .then(data => {
    fetch('http://localhost:3000/user_conversation', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: data.jwt
      },
    })
    .then(r => r.json())
    .then(console.log)
  })
