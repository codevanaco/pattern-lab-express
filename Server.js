const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/patterns')));
app.use(express.static(path.join(__dirname, 'public/styleguide')));
app.use(express.static(path.join(__dirname, 'public/js')));
app.use(express.static(path.join(__dirname, 'public/images')));
app.use(express.static(path.join(__dirname, 'public/fonts')));
app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public/annotations')));

app.get('/', (req, res) => res.sendFile('index.html'));

app.listen(80, () => console.log('Example app listening on port 80!'));
