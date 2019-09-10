// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    usNullAsDefault: true,
    connection: {
      filename: './dev.sqlite3'
    }
  }
};
