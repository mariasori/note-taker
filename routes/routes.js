//const fs = require('fs');
//const path = require('path');
//const notes = require('../db/db.json')
//
//module.exports = app => {    
//    
//    currentID = notes.length;
//
//    app.get('/', function(req, res) {
//        res.sendFile(path.join(__dirname, './public/index.html'));
//    });
//
//    app.get('/notes', function(req, res) {
//        res.sendFile(path.join(__dirname, './public/notes.html'));
//    })
//
//    app.post('/api/notes', function(req, res) {
//        var newNote = req.body;
//        console.log(newNote);
//        
//        fs.appendFile(__dirname + '/db/db.json', JSON.stringify(newNote), function(err, data) {
//            if (err) {
//                return err
//            }
//        })
//        res.json(newNote);
//    })
//
//    app.get('/api/notes', function(req, res) {
//        fs.readFile(__dirname + '/db/db.json', 'utf8', function(err, data) {
//            if (err) {
//                return console.log(err)
//            }
//
//            console.log(data)
//        })
//        res.json(newNote)
//    });
//
//    app.delete('/api/notes/:id', function(req, res) {
//
//        var deletedNote = req.params.id
//        
//        console.log(deletedNote)
//    })
//}