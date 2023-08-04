const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true});

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.listen(3000,() => {
  console.log('App listening')
})

app.get('/', (req,res) => {
  res.render('index');
})

app.get('/about', (req,res) => {
  res.render('about');
})

app.get('/post', (req,res) => {
  res.render('post');
})

app.get('/contact', (req,res) => {
  res.render('contact');
})

app.get('/posts/new',(req,res) => {
  res.render('create')
})
