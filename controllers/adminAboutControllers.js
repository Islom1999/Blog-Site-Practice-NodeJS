
const Pages = require('../model/PagesModel')

const getAboutPage = async(req,res) => {
    try{
        const AboutDB = await Pages.find().lean()
    
        res.render('admin/adminAbout', {
            admin: 'admin',
            url: process.env.URL, 
            pageAbout: 'about',
            AboutDB: AboutDB[0].aboutPage
        })
    }catch(err){
        console.log(err)
    }
}

const updatePersonalUpdate = async(req,res) => {
    try{
        const AboutDB = await Pages.find().lean()

        const id = AboutDB[0]._id

        const newAboutDB = {
            firstName: req.body.firstName ? req.body.firstName : AboutDB[0].aboutPage.personaInfo.firstName, 
            lastName: req.body.lastName ? req.body.lastName : AboutDB[0].aboutPage.personaInfo.lastName, 
            age: req.body.age ? req.body.age : AboutDB[0].aboutPage.personaInfo.age, 
            national: req.body.national ? req.body.national : AboutDB[0].aboutPage.personaInfo.national, 
            freelance: req.body.freelance ? req.body.freelance : AboutDB[0].aboutPage.personaInfo.freelance, 
            address: req.body.address ? req.body.address : AboutDB[0].aboutPage.personaInfo.address, 
            phone: req.body.phone ? req.body.phone : AboutDB[0].aboutPage.personaInfo.phone, 
            email: req.body.email ? req.body.email : AboutDB[0].aboutPage.personaInfo.email, 
            skype: req.body.skype ? req.body.skype : AboutDB[0].aboutPage.personaInfo.skype, 
            lang: req.body.lang ? req.body.lang : AboutDB[0].aboutPage.personaInfo.lang, 
        }

        AboutDB[0].aboutPage.personaInfo = newAboutDB

        await Pages.findByIdAndUpdate(id, AboutDB[0]) 
    
        res.redirect('/admin/about')

    }catch(err){
        console.log(err)
    }
}

const updatePersonalContentUpdate = async(req,res) => {
    try{
        const AboutDB = await Pages.find().lean()

        const id = AboutDB[0]._id

        AboutDB[0].aboutPage.personaContent.forEach((elem, index) => {
            AboutDB[0].aboutPage.personaContent[index] = {
                index,
                num: req.body['num-' + index],
                content: req.body['content-' + index]
            }
        } )

        await Pages.findByIdAndUpdate(id, AboutDB[0]) 
    
        res.redirect('/admin/about')

    }catch(err){
        console.log(err)
    }
}

const addSkillsAboutPage = async(req,res) => {
    try{
        const AboutDB = await Pages.find().lean()

        const id = AboutDB[0]._id

        AboutDB[0].aboutPage.skills.push({
            index: AboutDB[0].aboutPage.skills.length,
            number: req.body.number,
            content: req.body.text
        })

        await Pages.findByIdAndUpdate(id, AboutDB[0]) 
    
        res.redirect('/admin/about')

    }catch(err){
        console.log(err)
    }
}

const deleteSkillsAboutPage = async(req,res) => {
    try{
        const AboutDB = await Pages.find().lean()

        const id = AboutDB[0]._id

        AboutDB[0].aboutPage.skills = AboutDB[0].aboutPage.skills.filter(elem => elem._id != req.params.id)

        await Pages.findByIdAndUpdate(id, AboutDB[0]) 
    
        res.redirect('/admin/about')

    }catch(err){
        console.log(err)
    }
}

const addPracticeAboutPage = async(req,res) => {
    try{
        const AboutDB = await Pages.find().lean()

        if(req.body.select = "education"){
            AboutDB[0].aboutPage.practice.education.push({
                date: req.body.date,
                title: req.body.title,
                descr: req.body.descr
            })
        }else{
            AboutDB[0].aboutPage.practice.experiense.push({
                date: req.body.date,
                title: req.body.title,
                descr: req.body.descr
            })
        }
        
        await Pages.findByIdAndUpdate(AboutDB[0]._id, AboutDB[0]) 
    
        res.redirect('/admin/about')

    }catch(err){
        console.log(err)
    }
}

const deletePracticeAboutPage = async(req,res) => {
    try{
        const AboutDB = await Pages.find().lean()

        if(req.body.type = "education"){
            AboutDB[0].aboutPage.practice.education = AboutDB[0].aboutPage.practice.education.filter(elem => elem._id != req.params.id)
        }else{
            AboutDB[0].aboutPage.practice.experiense = AboutDB[0].aboutPage.practice.experiense.filter(elem => elem._id != req.params.id)
        }
        
        await Pages.findByIdAndUpdate(AboutDB[0]._id, AboutDB[0]) 
    
        res.redirect('/admin/about')

    }catch(err){
        console.log(err)
    }
}


module.exports = {
    getAboutPage,
    updatePersonalUpdate,
    updatePersonalContentUpdate,
    addSkillsAboutPage,
    deleteSkillsAboutPage,
    addPracticeAboutPage,
    deletePracticeAboutPage
}