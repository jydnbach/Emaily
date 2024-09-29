const express = require('express');
// common js modules
// es2015 modules e.g. import ... from
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();

// require statement moved down here. 2nd parens invokes …
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5001;
app.listen(5001);
