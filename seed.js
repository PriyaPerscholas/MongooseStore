require('dotenv').config()
const mongoose = require('mongoose')
const Product = require('./models/products.js');
const db = require('./models/db')

const productSeed =
       [
              {
                     name: 'Princess Cake',
                     description: "Every princess will love this for her birthday",
                     img: "https://cutpcdnwimages.azureedge.net/images/products/15000/019534-600x600-A.jpg",
                     price: 50,
                     qty: 5
              }, {
                     name: "Black Forest Cherry Cake",
                     description: "Melts in your mouth. For Chocolate lovers",
                     img: "https://cutpcdnwimages.azureedge.net/images/products/90000/094894-600x600-A.jpg",
                     price: 35,
                     qty: 6
              }, {
                     name: "Vanilla Cream Cheese Cake",
                     description: "Enjoy your cream cheese cake with floral design",
                     img: "https://cutpcdnwimages.azureedge.net/images/products/95000/096723-600x600-A.jpg",
                     price: 45,
                     qty: 5,
              }, {
                     name: "Cookies and Cream Hero",
                     description: "Three layers of chocolate and three layers of vanilla cake filled with...",
                     img: "https://cutpcdnwimages.azureedge.net/images/products/95000/097253-600x600-A.jpg",
                     price: 50,
                     qty: 6,
              }, {
                     name: "Celestial Unicorn",
                     description: "Six layers of vanilla or chocolate cake iced and filled with buttercre...",
                     img: "https://cutpcdnwimages.azureedge.net/images/products/95000/097251-600x600-A.jpg",
                     price: 35,
                     qty: 3
              }, {
                     name: "Rainbow Celebration",
                     description: "Six layers of vanilla or chocolate cake filled with rainbow buttercrea...",
                     img: "https://cutpcdnwimages.azureedge.net/images/products/90000/091297-600x600-A.jpg",
                     price: 55,
                     qty: 7
              }, {
                     name: "Strawberry Covered Chocolate",
                     description: "six layer of  chocolate cake filled with ganache then iced in strawberry buttercream. Garnished with ganache, chocolate dipped strawberries, fudge icing, chocolate pieces, and macarons",
                     img: "https://cutpcdnwimages.azureedge.net/images/products/90000/093663-600x600-A.jpg",
                     price: "55",
                     qty: "7",
              }

       ]


const seed = async () => {
       await Product.deleteMany({})
       await Product.insertMany(productSeed)
}

seed().then(() => {
       db.close()
})
