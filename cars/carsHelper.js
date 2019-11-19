const db = require("../data/dbConfig")

module.exports = {
    get,
    getById,
    insert,
    update,
    remove,
    getByQuery
}

// Get all cars
function get() {
    return db('cars');
}

// Get a car by ID
function getById(id) {
    return db('cars')
        .where({ id })
        .first();
}

// Post a car to the db
function insert(car) {
    return db('cars')
        .insert(car)
        .then(id => {
            return getById(id[0])
        });
}

// Edit a car in the db
function update(id, changes) {
    return db('cars')
        .where('id', id)
        .update(changes);
}

// Delete a car in the db
function remove(id) {
    return db('cars')
        .where('id', id)
        .del();
}

// Get car list by specific params
function getByQuery(limit, sortBy, sortDir) {
    return db('cars')
        .limit(limit)
        .orderBy(sortBy, sortDir)
}