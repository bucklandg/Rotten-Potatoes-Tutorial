const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.render('home', {msg: 'handlebars are Cool!'});
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})

// app.js
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
