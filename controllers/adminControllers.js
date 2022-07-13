
const Pages = require('../model/PagesModel')

const getAdminPage = (req,res) => {
    res.render('admin/dash', {
        admin: 'admin',
        url: process.env.URL,
        pageDash: 'dash'
    })
}

const getHomePage = async(req,res) => {
    const homePage = await Pages.find().lean()

    res.render('admin/adminHome', {
        admin: 'admin',
        url: process.env.URL,
        pageHome: 'home',
        homeDB: homePage[0].homePage
    })
}

const putHomePage = async(req,res) => {

    const homePage = await Pages.find().lean()

    const id = homePage[0]._id

    const newHomeDB = {
        titleH3: req.body.titleh3 ? req.body.titleh3 : homePage[0].homePage.titleH3, 
        titleH1: req.body.titleh1 ? req.body.titleh1 : homePage[0].homePage.titleH1, 
        titleH1Color: req.body.titleh1color ? req.body.titleh1color : homePage[0].homePage.titleH1Color, 
        button: req.body.button ? req.body.button : homePage[0].homePage.button, 
        descr: req.body.descr ? req.body.descr : homePage[0].homePage.descr, 
        image: Boolean(req.file) ? 'img/blog/' + req.file.filename : homePage[0].homePage.image
    }

    homePage[0].homePage = newHomeDB

    await Pages.findByIdAndUpdate(id, homePage[0]) 


    res.redirect('/admin/home')
}
 
const getContactPage = async(req,res) => {
    res.render('admin/adminContact', {
        admin: 'admin',
        url: process.env.URL,
        pageContact: 'contact'
    })
}
const getPortfolioPage = async(req,res) => {

    const PagesDB = await Pages.find().lean()

    res.render('admin/adminPortfolio', {
        admin: 'admin',
        url: process.env.URL,
        pagePortfolio: 'portfolio',
        PagesDB: PagesDB[0].portfolioPage
    })
}
const addPortfolioPage = async(req,res) => {

    const PagesDB = await Pages.find().lean()
  
    PagesDB[0].portfolioPage.push({
        text: req.body.text,
        image:  '/img/blog/' + req.file.filename
    })

    await Pages.findByIdAndUpdate(PagesDB[0]._id, PagesDB[0])

    res.redirect('/admin/portfolio')
}

const deletePortfolioPage = async(req,res) => {

    const PagesDB = await Pages.find().lean()
  
    PagesDB[0].portfolioPage = PagesDB[0].portfolioPage.filter(elem => req.params.id != elem._id)

    await Pages.findByIdAndUpdate(PagesDB[0]._id, PagesDB[0])

    res.redirect('/admin/portfolio')
}


module.exports = {
    getAdminPage,
    getHomePage,
    getContactPage,
    getPortfolioPage,
    putHomePage,
    addPortfolioPage,
    deletePortfolioPage
}