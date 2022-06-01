'use strict';

const mysql = require('mysql2'),
  conf = require('./db-conf.js'),
  dbOptions = {
    host: conf.host,
    user: conf.user,
    password: conf.pass,
    database: conf.db,
  },
  myConn = mysql.createConnection(dbOptions);

myConn.connect((err) => {
  return err
    ? console.log(`Error al conectarse a MySQL: ${err.stack}`)
    : console.log(`Conección establecida con MySQL Nº: ${myConn.threadId}`);
});

module.exports = myConn;
