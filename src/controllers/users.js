const User = require('../models/user');

// Получем всех пользователей из БД
const getUsers = (req, res) => {
  return User.find({}).then((users) => res.status(200).send(users));
};

// Получем пользователя по ID
const getUser = (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  return User.findById(id)
    .then((user) => {
      res.status(200).send(user);
    })
    .catch(() => {
      res.status(404).send(`User ${id} Not found 404`);
    });
};

// Создаем пользоователя
const createUser = (req, res) => {
  return User.create({ ...req.body }).then((user) => {
    res.status(201).send(user);
  });
};

// Обновляем пользоователя
const updateUser = (req, res, next) => {
  const { id } = req.params;
  User.findByIdAndUpdate(id, { ...req.body })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((e) => {
      res.status(500);
    });
};

const deleteUser = (req, res, next) => {
  const { id } = req.params;
  User.deleteOne({ _id: id })
    .then((dbResponse) => {
      res.status(200).send(dbResponse);
    })
    .catch((e) => {
      res.status(500);
    });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
