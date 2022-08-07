
const router = require('express').Router();
const userRouter = require('./users');
const bookRouter = require('./books');

router.use('/users', userRouter);
router.use('/books', bookRouter);

router.get('/*', function(req, res) {
    res.redirect('/books')
});

module.exports = router;