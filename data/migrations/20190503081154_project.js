exports.up = function(knex, Promise) {
  return knex.schema.createTable("project", tbl => {
    tbl.increments();

    tbl
      .string("name", 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {};
