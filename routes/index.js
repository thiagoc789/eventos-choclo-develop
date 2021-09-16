const Router = require('express-promise-router');
const user = require('../controllers/usersController');
const router = new Router();
module.exports = router;

module.exports = (app) => {
    app.use('/user', user);
};