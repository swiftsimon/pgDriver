

const settings = require("./settings"); // settings.json


const knex = require("knex")({
  client: 'postgres',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
    }

});

// accept 3 command line arguments firstname, lastname, date
// and use knex to perform an insert

const addPerson = function(fName, lName, date) {
   if (err) {
        return console.log('function error', err);
      }

    // knex.insert({id: 5, first_name: "Steve", last_name: "Buchemy", birthdate: "1955-05-19"})

    knex.insert({first_name: process.argv[2], last_name: process.argv[3], birthdate: process.argv[4]})
    .into("famous_people");

     };


//     knex.select().from('famous_people')
//       .asCallback(function(err, rows) {
//     if (err) {
//        console.log("knex error");
//        return
//     }
//     console.log("rows", rows);
//     knex.destroy();
// });




// CREATE TABLE famous_people (
//   id BIGSERIAL PRIMARY KEY,
//   first_name VARCHAR(50),
//   last_name VARCHAR(50),
//   birthdate DATE
// );