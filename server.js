const express = require('express');
const fs = require('fs');
const path = require('path');
const notes = require('./db/db.json');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

currentID = notes.length;

//API routes
app.get('/api/notes', function (req, res) {
    return res.json(notes);
})

app.post('/api/notes', function (req, res) {
    var newNote = req.body;
    notes.push(newNote);
    updateNotes();
    return console.log('Added new note: ' + newNote.title)
});

app.delete('/api/notes/:id', function (req, res) {
    notes.splice(req.params.id, 1);
    updateNotes();
    return console.log('Deleted note with id ' + req.params.id);
});

function updateNotes() {
    fs.writeFile('db/db.json', JSON.stringify(notes), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('Notes updated!')
    });
}

//HTML routes
app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });