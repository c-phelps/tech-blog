const router = require('express').Router();
const userRoutes = require('./userRoutes');

// home/api/users/
router.use('/users', userRoutes);
// home/api/blog
router.use('/blog', blogRoutes);

module.exports = router;