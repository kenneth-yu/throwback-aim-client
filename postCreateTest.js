const fetch = require('node-fetch');

fetch('http://localhost:3000/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: `snorlax`,
      password: '123',
      logged_in: 'true'
    }
  })
})
  .then(r => r.json())
  .then(console.log)
