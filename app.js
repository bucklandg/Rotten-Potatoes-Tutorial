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

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes', {useNewUrlParser: true});

const Review = mongoose.model('Review', {
  title: String,
  movieTitle: String
})


// OUR MOCK ARRAY OF PROJECTS
// let reviews = [
//   {title: "Great Review", movieTitle: "Batman II"},
//   {title: "Awesome Movie", movieTitle: "Titanic"},
//   {title: "Let's go Fuckers!", movieTitle: "Trailer Park Boys", body: "Lorem ipsum doloret sit amet"}
// ]

// INDEX
app.get('/', (req, res) => {
  // .find method return a PROMISE, and it is an object that represents a value that will be provided in the future
  Review.find()
  // With .then method we provide a function if the Promise resolves, and it happen once the data comes back from the database
    .then(reviews => {
      res.render('reviews-index', { reviews: reviews });
    })
    // With .catch method we provide a function if the Promise is rejected
    .catch(err => {
      console.log(err);
    })
})
