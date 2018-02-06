// This module returns a function that receives the database connection
// inside the `client` argument
module.exports = function(client) {

  // The `client` argument is available in here, since arguments become a
  // local variable.

  // Now we define the values and functions we want to return from the modules
  // this is the query we want to put into a function
      // const query =` SELECT * FROM famous_people
      //       WHERE last_name = $1 OR first_name = $1;`


  const findByName = function(name, callback) {
    const query =` SELECT * FROM famous_people WHERE last_name = $1 OR first_name = $1;`
    client.query(query, [name], callback);
  }




  return {
    findByName,

  }

}