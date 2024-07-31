// this file was not needed for the challenge but I wanted to practice creating a modular routing file for the future

const router = require('express').Router();

const notesRouter = require('./notes');
router.use('/notes', notesRouter);

module.exports = router;