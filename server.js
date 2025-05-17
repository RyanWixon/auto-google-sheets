const express = require('express');
const path = require('path');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');

const app = express();
const PORT = process.env.PORT || 3000;

// Live reloads
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(__dirname);
app.use(connectLivereload());

app.use(express.json());
app.use(express.static('public')); // Serve public/index.html and script.js

// POST endpoint
app.post('/test', (req, res) => {
  const { num1, num2 } = req.body;
  res.json({ num3: parseInt(num1) + parseInt(num2) });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// Notify browser on changes
liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});
