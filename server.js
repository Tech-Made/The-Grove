const express = require("express");
require('dotenv').config()
const app = express();
const path = require('path') // research the path native node module
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const port = process.env.PORT || 5000
require('./data/techmade-db');
const cors = require('cors')

app.use(cors({credentials: false}));

app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const logic = require('./controllers/index');
app.use(logic);

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

app.listen(port, () =>{
    console.log(`Server is listening on ${port}`);
});

module.exports = { app }
 