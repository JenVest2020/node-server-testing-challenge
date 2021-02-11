
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('guests')
    .truncate()
    .then(function () {
      return knex('guests').insert([
        { firstName: 'Kathy', lastName: 'Vest' },
        { firstName: 'Dale', lastName: 'Vest' },
        { firstName: 'Samantha', lastName: 'Vest' },
        { firstName: 'Tina', lastName: 'Vest' },
      ]);
    });
};
