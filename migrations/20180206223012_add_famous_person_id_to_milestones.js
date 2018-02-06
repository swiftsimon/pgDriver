
exports.up = function(knex, Promise) {
    return Promise.all([
    knex.schema.table('milestones', function(table) {
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('famous_people.id')
          })
  ])
};

exports.down = function(knex, Promise) {
   return Promise.all([
    knex.schema.table('milestones', function(table){
      table.dropColumn('foreign');
    })
  ])
};


// A foreign_key pointing to the famous person: famous_person_id (integer)

// knex.schema.table('users', function (table) {
//   table.integer('user_id').unsigned()
//   table.foreign('user_id').references('Items.user_id_in_items')
// })

// CREATE TABLE famous_people (
//   id BIGSERIAL PRIMARY KEY,
//   first_name VARCHAR(50),
//   last_name VARCHAR(50),
//   birthdate DATE
// );