
import router from 'koa-router'

import home from './home'
import api from './api'

const Router = router()

Router.use('/', home.routes(), home.allowedMethods())
Router.use('/api', api.routes(), api.allowedMethods())

module.exports = Router