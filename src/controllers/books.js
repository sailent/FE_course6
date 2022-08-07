const Book = require('../models/book');

// Получем всех пользователей из БД
const getBooks = (req, res) => {
  return Book.find({}).then((books) => res.status(200).send(books));
};

// Получем пользователя по ID
const getBook = (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  return Book.findById(id)
    .then((book) => {
      res.status(200).send(book);
    })
    .catch(() => {
        res.status(404).send(`Book ${id} Not found 404`);
      });
};

// Создаем пользоователя
const createBook = (req, res) => {
  return Book.create({ ...req.body }).then((book) => {
    res.status(201).send(book);
  });
};

// Обновляем пользоователя
const updateBook = (req, res, next) => {
  const { id } = req.params;
  Book.findByIdAndUpdate(id, { ...req.body })
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((e) => {
      res.status(500);
    });
};

const deleteBook = (req, res, next) => {
  const { id } = req.params;
  Book.deleteOne({ _id: id })
    .then((dbResponse) => {
      res.status(200).send(dbResponse);
    })
    .catch((e) => {
      res.status(500);
    });
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
