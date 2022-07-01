const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const BlogPostModel = require('./model/blogModel')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
})

const BlogPost = JSON.parse(fs.readFileSync(`${__dirname}/_data/blogPostDB.json`), 'utf-8')



const importData = async() => {
    try{
        await BlogPostModel.create(BlogPost)
        
        console.log('Data imported DB ...')
        process.exit()
    }catch(err){
        console.log(err)
    }
}

const deleteData = async () => {
    try{
        await BlogPostModel.deleteMany()

        console.log('Data deleted ...')
    }catch(err){
        
        console.log(err)
    }
}

// run function: node seeder -i
if(process.argv[2] == '-i'){
    importData()
}// run function: node seeder -d
else if(process.argv[2] == '-d'){
    deleteData()
}
