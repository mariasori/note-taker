const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const notes = require('../db/db.json')

router.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router