const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const notes = require('../db/db.json')
    
var noteId = 0;

//API routes
router.get('/notes', function (req, res) {
    return res.json(notes);
})

router.post('/notes', function (req, res) {
    
    noteId = noteId + 1;

    var newNote = { title: req.body.title, text: req.body.text, id: noteId}
    notes.push(newNote);

    fs.writeFile('./db/db.json', JSON.stringify(notes), function(err) {
        if (err) {
            return console.log(err);
        }
    });

    res.json(notes);
    return console.log('Added new note: ' + newNote.title)
});

router.delete('/notes/:id', function (req, res) {
    const { id } = req.params;

    const notesIndex = notes.findIndex(p => p.id == id);

    notes.splice(notesIndex, 1);

    res.json(notes);
    return console.log('Deleted note with id ' + req.params.id);
});

module.exports = router;