const BlogPost = require('../model/blogModel')

const getHomePage = (req,res) => {
    res.render('home', {
        url: process.env.URL 
    })
}
const getAboutPage = (req,res) => {
    res.render('about', {
        url: process.env.URL 
    })
}
const getContactPage = (req,res) => {
    res.render('contact', {
        url: process.env.URL 
    })
}
const getPortfolioPage = (req,res) => {
    res.render('portfolio', {
        url: process.env.URL 
    })
}
const getBlogPage = async(req,res) => {
    const BlogDataDB = await BlogPost.find().lean()

    res.render('blog/blog', {
        url: process.env.URL,
        BlogData: BlogDataDB
    })
}
const getBlogPostPage = async(req,res) => {
    const id = req.params.id
    const BlogPostDB = await BlogPost.findOne({_id:id}).lean()
    
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