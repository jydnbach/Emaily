const express = require('express');
// common js modules
// es2015 modules e.g. import ... from
require('./services/passport');

const app = express();

// require statement moved down here. 2nd parens invokes …
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5001;
app.listen(5001);
