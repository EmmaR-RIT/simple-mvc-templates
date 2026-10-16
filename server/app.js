const path = require('path');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');
const handlebars = require('express-handlebars');
const router = require('./router.js');


// setup server
const port = process.env.PORT || process.env.NODE_PORT || 3000;
const app = express();


// app use statements
app.use('/assets', express.static(path.resolve(`${__dirname}/../public/`)));
app.use(favicon(`${__dirname}/../public/img/favicon.png`));
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// setup handlebars engine
app.engine('handlebars', handlebars.engine({ defaultLayout: '' }));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/../views`);


// set up router
router(app);


// start server
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Listening on port ${port}`); // eslint-disable-line no-console
});

