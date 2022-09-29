const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Bot Online now')
});
 
function keepAlive() {
  app.listen(3000, () => { console.log("Server is Ready!!" + Date.now()) });
}
 
module.exports = keepAlive;