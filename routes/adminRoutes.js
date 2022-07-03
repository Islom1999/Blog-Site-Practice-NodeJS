const { Router } = require('express')
const {
    getAdminPage,
    getHomePage,
    getBlogPage,
    getContactPage,
    getPortfolioPage,
    getAboutPage
} = require('../controllers/adminControllers')

const router = Router()   

// "/" => "url + /admin"
router.get('/', getAdminPage)
router.get('/home', getHomePage)
router.get('/blog', getBlogPage)
router.get('/contact', getContactPage)
router.get('/portfolio', getPortfolioPage)
router.get('/about', getAboutPage)

module.exports = router


