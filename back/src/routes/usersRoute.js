const router = require('express').Router();
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

router.route('/signup').post(authController.signUp);
router.route('/signin').post(authController.signIn);
router.route('/').get(userController.GetAll);
router.route('/:id').get(userController.getUser).put(userController.UpdateOne);
router.route('/update/password').put(authController.protect, authController.updatePassword);
// router.get('/StatsUsers', userController.StatsUsers);

module.exports = router;
