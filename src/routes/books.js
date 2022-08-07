const router = require('express').Router();
const {getBooks, getBook, createBook, updateBook, deleteBook} = require('../controllers/books')

router.get('/', getBooks);
router.post('/', createBook);
router.get('/:id', getBook);
router.patch('/:id', updateBook);
router.delete('/:id', deleteBook);

router.get('/*', function(req, res) {
    res.redirect('/')
});

module.exports = router;