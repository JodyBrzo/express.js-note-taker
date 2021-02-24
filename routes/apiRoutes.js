// LOAD DATA
// We are linking our routes to a series of "data" sources.
const store = require('../Develop/db/store.js');
const router = require('express').Router();

// ROUTING

// module.exports = (app) => {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  router.get('/notes', (req, res) => {
    
    store.getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
  });

  router.post('/notes', (req, res) => {
    
    store.addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err))
  });

  router.delete('/notes/:id', (req, res) => {
    
    store.removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err))
  });

module.exports = router;