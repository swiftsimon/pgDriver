const pg = require("pg");
const settings = require("./settings"); // settings.json


const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

// when making it modular, require the file that you export, from models directory
// define client first above
const names = require('./models/namesQuery')(client)


client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }


    // pass in the function we exported
    names.findByName(process.argv[2], (err, result) => {
      if (err) {
        return console.log('function error', err)
       }

       const rows = result.rows;       // the result is returned as an object, the main data we want
       console.log(rows);              // is stored in the key names rows
       client.end();                   // close the connection after you get your result

    });

});


// CREATE TABLE famous_people (
//   id BIGSERIAL PRIMARY KEY,
//   first_name VARCHAR(50),
//   last_name VARCHAR(50),
//   birthdate DATE
// );






