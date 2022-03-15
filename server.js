require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const methodOverride = require('method-override');
const Product = require('./models/products.js');

//connect to database
const db = require('./models/db')
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
}) // Creates res.locals.data
app.use(express.urlencoded({ extended: true })) // Creates req.body
app.use(methodOverride('_method')); // Allows us to override methods
app.use(express.static('public')); // Allows us to have Static Files
// app.use('/fruits', require('./controllers/routeController.js')); // Mounts our RESTFUL/INDUCES ROUTES at /fruits

//seed
app.get('/seed', async (req, res) => {
       const newProducts =
              [
                     {
                            name: 'Beans',
                            description: 'A small pile of beans. Buy more beans for a big pile of beans.',
                            img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
                            price: 5,
                            qty: 99
                     }, {
                            name: 'Bones',
                            description: 'It\'s just a bag of bones.',
                            img: 'http://bluelips.com/prod_images_large/bones1.jpg',
                            price: 25,
                            qty: 0
                     }, {
                            name: 'Bins',
                            description: 'A stack of colorful bins for your beans and bones.',
                            img: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
                            price: 7000,
                            qty: 1
                     }
              ]

       try {
              const seedItems = await Product.create(newProducts)
              res.send(seedItems)
       } catch (err) {
              res.send(err.message)
       }
})



//index route
app.get('/products', (req, res) => {
       Product.find({}, (error, allProducts) => {
              res.render('Index', {
                     products: allProducts
              })
       })
})

//new product page
app.get('/products/new', (req, res) => {
       res.render('New')
})

//form post to create new product
app.post('/products/', (req, res) => {
       Product.create(req.body, (error, createdProducts) => {
              res.redirect('/products')
       })

})



//connect to mongo database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
       console.log('connected to mongo')
})

app.listen(PORT, () => {
       console.log("listening")
})