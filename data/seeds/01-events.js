
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('events')
    .truncate()
    .then(function () {
      return knex('events').insert([
        { name: 'Birthday Party' },
        { name: 'Anniversary Party' },
        { name: 'Christmas Party' },
        { name: 'Graduation Party' },
      ]);
    });
};
