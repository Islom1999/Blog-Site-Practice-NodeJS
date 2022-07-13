const BlogPost = require('../model/blogModel')
const Pages = require('../model/PagesModel')

const getHomePage = async(req,res) => {
    const homePage = await Pages.find().lean()
    res.render('home', {
        url: process.env.URL,
        homeDB: homePage[0].homePage
    })
}
const getAboutPage = async(req,res) => {
    const AboutDB = await Pages.find().lean()
    res.render('about', {
        url: process.env.URL,
        AboutDB: AboutDB[0].aboutPage
    })
}
const getContactPage = (req,res) => {
    res.render('contact', {
        url: process.env.URL 
    })
}
const getPortfolioPage = async(req,res) => {
    const PagesDB = await Pages.find().lean()
    res.render('portfolio', {
        url: process.env.URL,
        PagesDB: PagesDB[0].portfolioPage
    })
}
const getBlogPage = async(req,res) => {
    const BlogDataDB = await BlogPost.find({}).lean()

    res.render('blog/blog', {
        url: process.env.URL,
        BlogData: BlogDataDB
    })
} 
const getBlogPostPage = async(req,res) => {

    const BlogPostDB = await BlogPost.findById(req.params.id).lean() 
    res.render('blog/blog-post', {
        url: process.env.URL , 
        BlogPostDB
    })
}

module.exports = {
    getHomePage,
    getAboutPage,
    getContactPage,
    getPortfolioPage,
    getBlogPage,
    getBlogPostPage
}