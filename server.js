const express = require('express');
const path = require('path');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');

const app = express();
const PORT = process.env.PORT || 3000;

// LiveReload server
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(__dirname);

// Inject the livereload script into HTML
app.use(connectLivereload());

// Serve static files
// app.use(express.static(path.join(__dirname)));
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
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