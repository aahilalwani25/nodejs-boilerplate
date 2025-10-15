//all routes will be gathered here
const testRoute = require('./test.routes');
const authRoutes = require('./auth.routes')

const routes = [
    ...authRoutes,
    // ...testRoute
]
module.exports = { routes }