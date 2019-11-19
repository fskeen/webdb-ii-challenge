const db = require("../data/dbConfig")

module.exports = {
    get,
    getById,
    insert,
    update,
    remove,
    getByQuery,
    getByIdPlusCar
}

// Get all sales
function get() {
    return db('sales');
}

// Get a sale by ID
function getById(id) {
    return db('sales')
        .where({ id })
        .first();
}

function getByIdPlusCar(id) {
    return db('sales')
        .select(["amount", "sales.id AS sale_id", "car_id", "vin", "make"])
        .join("cars", "cars.id", "sales.car_id")
        .where({ "sales.id": id })
        .first();
}

// Post a sale to the db
function insert(sale) {
    return db('sales')
        .insert(sale)
        .then(id => {
            return getById(id[0])
        });
}

// Edit a sale in the db
function update(id, changes) {
    return db('sales')
        .where('id', id)
        .update(changes);
}

// Delete a sale in the db
function remove(id) {
    return db('sales')
        .where('id', id)
        .del();
}

// Get sale list by specific params
function getByQuery(limit, sortBy, sortDir) {
    return db('sales')
        .limit(limit)
        .orderBy(sortBy, sortDir)
}