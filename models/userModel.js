const db = require('../config/database');

const createUsersTable = () => {
    const query = `CREATE TABLE IF NOT EXISTS
    users(
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      last_name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL UNIQUE,
      password VARCHAR(100) NOT NULL
    )
    ;

    ALTER TABLE public.users
    OWNER to hgnpsztahctuii;`;

    db.connect((err, client, done) => {
        if(err) {
            res.status(400).json({err});
        } else {
            client.query(query, (error, result) => {
                done();
                if(error) {
                    console.log(error);
                } else {
                    console.log('¡¡¡ USERS TABLE CREATED SUCCESSFULLY !!! ');
                    process.exit();
                }
            });
        }
    });
};

module.exports = createUsersTable;

require('make-runnable');

