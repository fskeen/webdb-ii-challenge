
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        {
          id: 1,
          car_id: 1,
          amount: 1111,
          salesperson: "Anna",
          customer: "Charlotte",
          sale_type: "Sale"
        },
        {
          id: 2,
          car_id: 2,
          amount: 1111,
          salesperson: "Terence",
          customer: "Sam",
          sale_type: "Lease"
        },
        {
          id: 3,
          car_id: 1,
          amount: 1111,
          salesperson: "Anna",
          customer: "Pedro",
          sale_type: "Sale"
        },
        {
          id: 4,
          car_id: 3,
          amount: 1111,
          salesperson: "Jordan",
          customer: "Carl",
          sale_type: "Lease"
        },
      ]);
    });
};

/**
 * Sales:
 * Amount: integer
 * Salesperson: string
 * customer name: string
 * Sale type: string
 */