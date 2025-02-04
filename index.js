const express = require('express');
const path = require('path');

const app = express();
const port = 7000;

// Setăm view engine pentru EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configurăm un director pentru fișiere statice
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principală
app.get('/', (req, res) => {
    res.render('calendar');
});

// Pornim serverul
app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
