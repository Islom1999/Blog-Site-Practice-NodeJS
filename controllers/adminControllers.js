const BlogPost = require('../model/blogModel')

const getAdminPage = (req,res) => {
    res.render('admin/dash', {
        admin: 'admin',
        url: process.env.URL,
        pageDash: 'dash'
    })
}

const getHomePage = (req,res) => {
    res.render('admin/adminHome', {
        admin: 'admin',
        url: process.env.URL,
        pageHome: 'home'
    })
}

const getBlogPage = async(req,res) => {
    const BlogDataDB = await BlogPost.find({}).lean()

    res.render('admin/adminBlog', {
        admin: 'admin',
        url: process.env.URL,
        BlogData: BlogDataDB,
        pageBlog: 'blog'
    })
}

const getContactPage = async(req,res) => {
    res.render('admin/adminContact', {
        admin: 'admin',
        url: process.env.URL,
        pageContact: 'contact'
    })
}
const getPortfolioPage = async(req,res) => {
    res.render('admin/adminPortfolio', {
        admin: 'admin',
        url: process.env.URL,
        pagePortfolio: 'portfolio'
    })
}

const getAboutPage = async(req,res) => {
    res.render('admin/adminAbout', {
        admin: 'admin',
        url: process.env.URL,
        pageAbout: 'about'
    })
}

module.exports = {
    getAdminPage,
    getHomePage,
    getBlogPage,
    getContactPage,
    getPortfolioPage,
    getAboutPage
}