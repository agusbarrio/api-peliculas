'use strict';

const conn = require('./movie-connection.js'),
  MovieModel = () => {};

MovieModel.getAll = (cb) => {
  conn.query('SELECT * FROM movie', cb);
};

MovieModel.getOne = (id, cb) => {
  conn.query('SELECT * FROM movie where movie_id = ?', id, cb);
};

MovieModel.save = (data, cb) => {
  conn.query(
    'SELECT * FROM movie WHERE movie_id = ?',
    data.movie_id,
    (err, results) => {
      console.log(`Número de registros: ${results.length}`);

      if (err) {
        return err;
      } else {
        return results.length === 1
          ? conn.query(
              'UPDATE movie SET ? WHERE movie_id = ?',
              [data, data.movie_id],
              cb
            )
          : conn.query('INSERT INTO movie SET ?', data, cb);
      }
    }
  );
};
MovieModel.delete = (id, cb) => {
  conn.query('DELETE FROM movie WHERE movie_id = ?', id, cb);
};

module.exports = MovieModel;
