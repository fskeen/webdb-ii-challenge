
exports.up = function(knex) {
    return knex.schema.createTable("cars", cars => {
        cars.increments();
        cars.string("vin")
            .unique()
            .notNullable();
        cars.string("make")
            .notNullable();
        cars.string("model")
            .notNullable(); 
        cars.integer("mileage")
            .notNullable();
        cars.string("transmission");
        cars.string("title")
    })
    .createTable('sales', function(sales) {
        sales.increments();
        sales.integer("amount").notNullable();
        sales.integer("car_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("cars")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        sales.string("salesperson");
        sales.string("customer");
        sales.string("sale_type");
    })
};

// rollback option to delete the changes made by this migration
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars").dropTableIfExists("sales");
};


/**
 * Sales:
 * Amount: integer
 * Salesperson: string
 * customer name: string
 * Sale type: string
 */