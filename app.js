const express = require('express')
const app = express()

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})

// app.js
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// CONNECT TO DATABASE

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes', {useNewUrlParser: true});

const Review = mongoose.model('Review', {
  title: String,
  rate: Number,
  description: String,
  movieTitle: String
})

// NEW
app.get('/reviews/new', (req, res) => {
  res.render('reviews-new', {});
})

// INITIALIZE BODY-PARSER AND ADD IT TO APP
const bodyParser = require('body-parser');

// The following line must appear AFTER const app = express() and before your routes!
app.use(bodyParser.urlencoded({ extended: true }));

// CREATE
app.post('/reviews', (req, res) => {
  Review.create(req.body).then((review) => {
    console.log(review);
    res.redirect('/');
  }).catch((err) => {
    console.log(err.message);
  })
})

// INDEX
app.get('/', (req, res) => {
  Review.find().lean()
    .then(reviews => {
      res.render('reviews-index', { reviews: reviews });
    })
    .catch(err => {
      console.log(err);
    })
})
