const fs = require('fs');
const path = require('path');
const notes = require('../db/db.json')
    
module.exports = app => {
    
    var noteId = 0;

    //API routes
    app.get('/api/notes', function (req, res) {
        return res.json(notes);
    })

    app.post('/api/notes', function (req, res) {
        
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

    app.delete('/api/notes/:id', function (req, res) {
        const { id } = req.params;

        const notesIndex = notes.findIndex(p => p.id == id);

        notes.splice(notesIndex, 1);

        res.json(notes);
        return console.log('Deleted note with id ' + req.params.id);
    });

    //HTML routes
    app.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
}

