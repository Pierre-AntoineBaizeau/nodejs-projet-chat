const router = require('express').Router();
const user = require('../controllers/auth.controller');
const auth = require('../middlewares/auth');

router.post('/', user.register);

router.post('/login', user.login);

router.get('/', auth, user.all);

router.get('/id', user.id);
module.exports = router;