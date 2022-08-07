const router = require('express').Router();
const {getUsers, getUser, createUser, updateUser, deleteUser} = require('../controllers/users')

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

router.get('/*', function(req, res) {
    res.redirect('/')
});

module.exports = router;