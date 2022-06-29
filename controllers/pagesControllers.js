
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
const getBlogPage = (req,res) => {
    res.render('blog/blog', {
        url: process.env.URL 
    })
}
const getBlogPostPage = (req,res) => {
    res.render('blog/blog-post', {
        url: process.env.URL 
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