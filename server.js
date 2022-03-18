require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000
const methodOverride = require('method-override');


//connect to database
const db = require('./models/db.js')
db.once('open', () => {
       console.log('connected to mongo')
})

//setup view engine routes
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Mount Express Middleware
app.use((req, res, next) => {
       res.locals.data = {}
       next()
})
// Creates res.locals.data
app.use(express.urlencoded({ extended: true })) // Creates req.body
app.use(methodOverride('_method')); // Allows us to override methods
app.use(express.static('public')); // Allows us to have Static Files
app.use('/products', require('./controllers/routeController.js'));

app.listen(PORT, () => {
       console.log("listening")
})