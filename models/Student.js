const model = {
  get: (conn, callback) => {
    conn.query("SELECT * FROM students", callback);
  },

  getById: (conn, id, callback) => {
    conn.query("SELECT * FROM students WHERE id=?", id, callback);
  },

  create: (conn, data, callback) => {
    conn.query("INSERT INTO students (name,class) VALUES (?, ?)", [
      data.name,
      data.class
    ], callback);
  },

  update: (conn, data, id, callback) => {
    conn.query("UPDATE students SET name=?, class=? WHERE id=?", [
      data.name,
      data.class,
      id
    ], callback);
  },

  delete: (conn, id, callback) => {
    conn.query("DELETE FROM students WHERE id=?", id, callback);
  }
}

module.exports = model;