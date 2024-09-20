const express = require('express');
// common js modules
// es2015 modules e.g. import ... from

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;
// environment variable
app.listen(PORT);
