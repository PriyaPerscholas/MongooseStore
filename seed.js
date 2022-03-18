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
                     description: "Rich chocolate cake with cherry filling and iced in vanilla whipped topping. Garnished with marachino cherries and encased in shards of chocolate.",
                     img: "https://cutpcdnwimages.azureedge.net/images/products/90000/094894-600x600-A.jpg",
                     price: 35,
                     qty: 6
              }, {
                     name: "Vanilla Cream Cheese Cake",
                     description: "Six layers of vanilla cake filled and iced with alternating cream cheese and buttercream icing. Elegantly decorated with white chocolate bars, candies, and light pink drizzle",
                     img: "https://cutpcdnwimages.azureedge.net/images/products/95000/096723-600x600-A.jpg",
                     price: 45,
                     qty: 5,
              }, {
                     name: "Cookies and Cream Hero",
                     description: "Three layers of chocolate and three layers of vanilla cake filled with cookies and cream mousse and iced with alternating stripes of mousse and buttercream. ",
                     img: "https://cutpcdnwimages.azureedge.net/images/products/95000/097253-600x600-A.jpg",
                     price: 50,
                     qty: 6,
              }, {
                     name: "Celestial Unicorn",
                     description: "Six layers of vanilla or chocolate cake iced and filled with buttercream icing. Covered with cosmic fusion sprinkles. Choose an option to fill the cake with sprinkles for extra magic. ",
                     img: "https://cutpcdnwimages.azureedge.net/images/products/95000/097251-600x600-A.jpg",
                     price: 35,
                     qty: 3
              }, {
                     name: "Rainbow Celebration",
                     description: "Six layers of vanilla or chocolate cake filled with rainbow buttercream colors. A deliciously fun cake with rainbow buttercream inside and out.",
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
