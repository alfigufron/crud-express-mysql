const Student = require('./../models/Student');

const controller = {
  studentView: async (req, res) => {
    try {
      await Student.get(req.conn, (req, data) => {
        res.render('student/data', {
          students: data
        });
      });
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  },

  studentAddView: async (req, res) => {
    res.render('student/add');
  },

  insertStudent: async (req, res) => {
    try {
      await Student.create(req.conn, req.body, (err) => {
        res.redirect('/student');
      })
    } catch (err) {
      console.log(err);
      res.redirect('/student');
    }
  },

  editStudent: async (req, res) => {
    try {
      await Student.getById(req.conn, req.params.id, (req, data) => {
        res.render('student/edit', {
          student: data[0]
        })
      });
    } catch (err) {
      console.log(err);
      res.redirect('/student');
    }
  },

  updateStudent: async (req, res) => {
    try {
      await Student.update(req.conn, req.body, req.params.id, (err) => {
        res.redirect('/student');
      });
    } catch (err) {
      console.log(err);
      res.redirect('/student');
    }
  },

  deleteStudent: async (req, res) => {
    try {
      await Student.delete(req.conn, req.params.id, (err) => {
        res.redirect('/student');
      });
    } catch (err) {
      console.log(err);
      res.redirect('/student');
    }
  }
}

module.exports = controller;