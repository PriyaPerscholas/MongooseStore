require('dotenv').config()
const express = require('express')
const app = express()
const Store = require('./Models/store.js')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const methodOverride = require('method-override');

//Middleware
app.use((req, res, next) => {
       console.log('I run for all routes')
       next()
})
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static('public'))

//seed
