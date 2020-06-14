const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

const connection = mysql.createConnection({
	host: dbConfig.HOST,
	user: dbConfig.USER,
	password: dbConfig.PASSWORD,
	db: dbConfig.DB
});

connection.connect(error => {
	if (error) throw error;
	console.log("Successfully connected to mysql");
});

module.exports = connection;