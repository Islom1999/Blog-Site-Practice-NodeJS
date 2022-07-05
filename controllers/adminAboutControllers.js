
const Pages = require('../model/PagesModel')

const getAboutPage = async(req,res) => {
    const AboutDB = await Pages.find().lean()

    res.render('admin/adminAbout', {
        admin: 'admin',
        url: process.env.URL, 
        pageAbout: 'about',
        AboutDB: AboutDB[0].aboutPage
    })
}


module.exports = {
    getAboutPage,
}