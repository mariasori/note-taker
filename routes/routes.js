const fs = require('fs');
const path = require('path');
const notes = require('../db/db.json')

module.exports = app => {    
    
    //API routes
    app.get('/api/notes', function (req, res) {
        return res.json(notes);
    })
    
    app.post('/api/notes', function (req, res) {
        noteId = notes.length;
        var newNote = { title: req.body.title, text: req.body.text, id: noteId}
        notes.push(newNote);
        updateNotes();
        res.json(notes);
        return console.log('Added new note: ' + newNote.title)
    });
    
    app.delete('/api/notes/:id', function (req, res) {
        notes.splice(req.params.id);
        updateNotes();
        return console.log('Deleted note with id ' + req.params.id);
    });
    
    function updateNotes() {
        fs.writeFile('./db/db.json', JSON.stringify(notes), function(err) {
            if (err) {
                return console.log(err);
            }
            console.log('Notes updated!')
        });
    }
    
    //HTML routes
    app.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
    
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
}