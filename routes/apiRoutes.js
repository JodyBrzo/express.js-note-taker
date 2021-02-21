// LOAD DATA
// We are linking our routes to a series of "data" sources.
const store = require('../db/store.js');

// ROUTING

module.exports = (app) => {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get('/api/notes', (req, res) => {
    
    store
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
  });

  app.post('/api/notes', (req, res) => {
    
    store
    .addNote(req.body)
    .then((note) => {
      return res.json(note);
    })
    .catch((err) => res.status(500).json(err));
  });

  app.delete('/api/notes/:id', (req, res) => {
    
    store
    .removeNote(req.params.id)
    .then(() => {
      return res.json({ ok: true });
    })
    .catch((err) => res.status(500).json(err));
  });
  
};