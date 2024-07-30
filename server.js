const express = require('express');
const path = require('path');
const api = require('./public/assets/js/index.js');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api, api');
app.use(express.static('public'