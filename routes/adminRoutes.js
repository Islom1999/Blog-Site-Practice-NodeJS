const { Router } = require('express')
const upload = require('../utils/fileUploads.js')

const {
    getAdminPage,
    getHomePage,
    getBlogPage,
    getContactPage,
    getPortfolioPage,
    getAboutPage,
    postBlogPage,
    getOneBlogPage,
    putOneBlogPage,
    deleteOneBlogPage
} = require('../controllers/adminControllers')

const router = Router()   

// "/" => "url + /admin"
router.get('/', getAdminPage)
router.get('/home', getHomePage)

router.get('/blog', getBlogPage)
router.post('/blog', upload.single('image'), postBlogPage)

router.get('/blog/:id', getOneBlogPage)
router.post('/blog/:id', upload.single('image'), putOneBlogPage)
router.post('/blog/:id/delete', deleteOneBlogPage)

router.get('/contact', getContactPage)
router.get('/portfolio', getPortfolioPage)
router.get('/about', getAboutPage)

module.exports = router


