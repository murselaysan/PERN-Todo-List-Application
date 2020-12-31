const Pool = require("pg").Pool;

const pool = new Pool ({
    user: "murse",
    password : "Mursel1299.",
    host : "localhost",
    port : 5432,
    database : "perntodo"
});

module.exports = pool;