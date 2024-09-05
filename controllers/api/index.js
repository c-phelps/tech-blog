const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');

// home/api/users/
router.use('/users', userRoutes);
// home/api/blog
router.use('/blog', blogRoutes);

module.exports = router;