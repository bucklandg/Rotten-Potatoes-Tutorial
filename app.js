const express = require('express')
const app = express()

// app.get('/', (req, res) => {
//   res.render('home', {msg: 'handlebars are Cool!'});
// })

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})

// app.js
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// OUR MOCK ARRAY OF PROJECTS
let reviews = [
  {title: "Great Review", movieTitle: "Batman II"},
  {title: "Awesome Movie", movieTitle: "Titanic"},
  {title: "Let's go Fuckers!", movieTitle: "Trailer Park Boys"}
]

// INDEX
app.get('/', (req, res) => {
  res.render('reviews-index', {reviews: reviews});
})
