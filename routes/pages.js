const {Router} = require('express')
const { 
    getHomePage,
    getAboutPage,
    getContactPage,
    getPortfolioPage,
    getBlogPage,
    getBlogPostPage
} = require('../controllers/pagesControllers')

const router = Router()

router.get('/', getHomePage)
router.get('/about', getAboutPage)
router.get('/contact', getContactPage)
router.get('/portfolio', getPortfolioPage)
router.get('/blog', getBlogPage)
router.get('/:id', getBlogPostPage)

module.exports = router