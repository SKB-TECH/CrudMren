const express = require('express');
const app=ex


app.get('/', (req, res, next) => {
    res.render('index')
    next()
})

app.get('/add-user', (req, res, next) => {
    res.render('add-user')
    next()
})

app.get('/update-user', (req, res, next) => {
    res.render('update-user')
    next()
})
