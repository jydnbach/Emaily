const express = require('express');
// common js modules
// es2015 modules e.g. import ... from
const app = express();
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});
app.listen(5001);
