var express = require('express');

var app = express();

var port = 8080;
const knex = require('knex')(require('./knexfile.js')['development']);

(async () => {
  try {
    console.log('Running migrations')
    await knex.migrate.latest();

    console.log('Seeding database')
    await knex.seed.run();

    console.log('Database ready')

    app.listen(port, () => {
      console.log('API Server listening on port ' + port);
    })
  } catch (err) {
    console.error('Database setup failed: ', err);
    // process.exit(1);
  }

})

app.get('/', function (req, res) {
  res.status(200).json({ message: 'My api is up and running' });
})

// app.listen(port, () => {
//   console.log('API Server listening on port ' + port);
// })

module.exports = app;