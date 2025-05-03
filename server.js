
const express = require('express');
const app = express()
// app.set("view engine", "ejs")
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.redirect('/Homepage');
});
app.get('/Homepage', (req, res) => {
    res.sendFile(__dirname + '/public/Html/Homepage.html');
});

app.get('/About', (req, res) => {
    res.sendFile(__dirname + '/public/Html/About.html');
});

app.get('/Timeline', (req, res) => {    
    res.sendFile(__dirname + '/public/Html/Projects.html');
});

app.listen(3000);
