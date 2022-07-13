const { Router } = require('express')
const upload = require('../utils/fileUploads.js')

const {
    getAdminPage,
    getHomePage,
    getContactPage,
    getPortfolioPage,
    putHomePage,
    addPortfolioPage,
    deletePortfolioPage
} = require('../controllers/adminControllers')

const {
    getAboutPage,
    updatePersonalUpdate,
    updatePersonalContentUpdate,
    addSkillsAboutPage,
    deleteSkillsAboutPage,
    addPracticeAboutPage,
    deletePracticeAboutPage
} = require('../controllers/adminAboutControllers')

const {
    getBlogPage,
    postBlogPage,
    getOneBlogPage,
    putOneBlogPage,
    deleteOneBlogPage,
} = require('../controllers/adminBlogControllers')

const router = Router()   

// "/" => "url + /admin"
router.get('/', getAdminPage)
router.get('/home', getHomePage)
router.post('/home', upload.single('image'), putHomePage)

router.get('/blog', getBlogPage)
router.post('/blog', upload.single('image'), postBlogPage)

router.get('/blog/:id', getOneBlogPage)
router.post('/blog/:id', upload.single('image'), putOneBlogPage)
router.post('/blog/:id/delete', deleteOneBlogPage)

router.get('/contact', getContactPage)

router.get('/portfolio', getPortfolioPage)
router.post('/portfolio/add', upload.single('image'), addPortfolioPage)
router.post('/portfolio/:id/delete', deletePortfolioPage)

router.get('/about', getAboutPage)
router.post('/about/personal/update', updatePersonalUpdate)
router.post('/about/personal/content/update', updatePersonalContentUpdate)
router.post('/about/skills/add', addSkillsAboutPage)
router.post('/about/skills/:id/delete', deleteSkillsAboutPage)
router.post('/about/practice/add', addPracticeAboutPage)
router.post('/about/practice/:id/delete', deletePracticeAboutPage)


module.exports = router


