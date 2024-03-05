const express = require('express');
const Sbasket = require('./json/basketball.json'); 
const Sstreet = require('./json/streetwear.json');

const app = express();
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/Public'));

app.get('/', (req, res) => {

    res.render('home', {
    title: 'Homepage',
    ball: Sbasket.Basketball,
    wear: Sstreet.Streetwear
    });
});

app.get('/basket', (req, res) => {
    res.render('scarpe', {
    title: 'Scarpe da Basket',
    scarpe: Sbasket.Basketball
    });
});

app.get('/street', (req, res) => {
    res.render('scarpe', {
        title: 'Sneakers',
        scarpe: Sstreet.Streetwear
    });
});

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});