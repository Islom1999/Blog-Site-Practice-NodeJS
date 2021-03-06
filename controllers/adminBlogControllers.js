const BlogPost = require('../model/blogModel')
const Pages = require('../model/PagesModel')

const getBlogPage = async(req,res) => {
    const BlogDataDB = await BlogPost.find({}).lean()

    res.render('admin/adminBlog', {
        admin: 'admin',
        url: process.env.URL,
        BlogData: BlogDataDB,
        pageBlog: 'blog'
    })
}

const getOneBlogPage = async(req,res) => {
    const BlogDataDB = await BlogPost.findById(req.params.id).lean()

    res.render('admin/adminOneBlog', {
        admin: 'admin',
        url: process.env.URL,
        BlogPostDB: BlogDataDB, 
        pageBlog: 'blog'
    })
}

const putOneBlogPage = async(req,res) => {
    const BlogDataDB = await BlogPost.findById(req.params.id).lean()

    const {title, descr} = req.body

    let NewBlogDataDB = {
        title: title ? title : BlogDataDB.title,
        descr: descr ? descr : BlogDataDB.descr,
        image: Boolean(req.file) ? 'img/blog/' + req.file.filename : BlogDataDB.image
    }

    await BlogPost.findByIdAndUpdate(req.params.id, NewBlogDataDB)

    res.redirect(`/admin/blog/${BlogDataDB._id}`)            
}

const deleteOneBlogPage = async(req,res) => {
    await BlogPost.findByIdAndDelete(req.params.id)
    res.redirect('/admin/blog')
}

const postBlogPage = async(req,res) => {
    const {title, descr} = req.body

    await BlogPost.create({
        title,
        descr,
        image:'img/blog/' + req.file.filename
    })
    
    res.redirect('/admin/blog')  
}

module.exports = {
    getBlogPage,
    postBlogPage,
    getOneBlogPage,
    putOneBlogPage,
    deleteOneBlogPage,
}