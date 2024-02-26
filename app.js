const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.redirect('/movies');
});

app.get('/movies', (req, res) => {
  res.send('ok movies');
});

app.get('/movies/:id', (req, res) => {
  const id = req.params.id;
  res.send(`read movie: ${id}`);
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`);
});
