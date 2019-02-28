// const router = require('koa-router')()
// import home from './home'
// debugger
// // const home = require('./home')
// // const api = require('./api')
// // const page = require('./page')

// // router.use('/', home.routes(), home.allowedMethods())
// // router.use('/api', api.routes(), api.allowedMethods())
// // router.use('/page', page.routes(), page.allowedMethods())

// export default router


const router = require('koa-router')()
import home from './home'
import api from './api'

// const home = require('./home')

// const api = require('./api')
// const page = require('./page')

router.use('/', home.routes(), home.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())
// router.use('/page', page.routes(), page.allowedMethods())

module.exports = router