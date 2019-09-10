
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          id: 1,
          vin: 'AAA111AAA',
          make: 'aaaaaaaa',
          model: 'aaaaaaaaaaa',
          mileage: 11111111,
          transmission: 'aaaaaaa',
          title: 'aaa'
        },
        {
          id: 2,
          vin: 'BBB222BBB',
          make: 'bbbbbbbbbbbb',
          model: 'bbbbbbbbb',
          mileage: 222222222,
          transmission: 'bbbbbbb',
          title: 'bbb'
        },
        {
          id: 3,
          vin: 'CCC333CCC',
          make: 'cccccccccc',
          model: 'cccccccccccc',
          mileage: 33333333,
          transmission: 'cccccc',
          title: 'ccc'
        }
      ]);
    });
};
