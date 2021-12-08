require("dotenv").config();

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "Muumimaa65",
  database: "WAD",
  host: "localhost",
  port: "5432",
});
module.exports = pool;
