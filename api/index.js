const express = require('express');
const cors = require('cors');
const app = express();

const port = 8080;
const knex = require('knex')(require('./knexfile.js')['development']);

app.use(cors());

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

})();

app.get('/', function (req, res) {
  knex('authors')
    .select('*')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'No data to display'
      })
    )
  // res.status(200).json({ message: 'My api is up and running' });
})

// app.listen(port, () => {
//   console.log('API Server listening on port ' + port);
// })

module.exports = app;