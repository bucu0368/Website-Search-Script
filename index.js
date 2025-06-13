const express = require('express');

const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, 'index.html'));

});

const PORT = process.env.PORT || 21469;

app.listen(PORT, '0.0.0.0', () => {

  console.log(`Server running on port ${PORT}`);

});

