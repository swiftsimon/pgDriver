

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



  knex.select().from('famous_people')
  .where('first_name', '=', 'Abraham')
  .asCallback(function(err, rows) {
    if (err) {
       console.log("knex error");
       return
    }
    console.log("rows", rows);
    knex.destroy();
});



// CREATE TABLE famous_people (
//   id BIGSERIAL PRIMARY KEY,
//   first_name VARCHAR(50),
//   last_name VARCHAR(50),
//   birthdate DATE
// );


