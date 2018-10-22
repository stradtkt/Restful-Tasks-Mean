const taskRoutes = require('./task.routes');
const authRoutes = require('./auth.routes');

module.exports = router
    .use('/auth', authRoutes)
    .use('/task', taskRoutes);
    