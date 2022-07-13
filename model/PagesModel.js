const mongoose = require('mongoose')

const PagesModel = new mongoose.Schema({
    homePage: {
        titleH3: {
            type: 'string',
            required: true,
        },
        titleH1: {
            type: 'string',
            required: true,
        },
        titleH1Color: {
            type: 'string',
            required: true,
        },
        image: {
            type: 'string',
            required: true,  
        },
        descr: {
            type: 'string',
            required: true,
        },
        button: {
            type: 'string',
            required: true,
        }
    },
    aboutPage:{
        personaInfo: {
            firstName:{
                type: 'string',
                required: true,
            },
            lastName:{
                type: 'string',
                required: true,
            },
            age:{
                type: 'number',
                required: true,
            },
            national:{
                type: 'string',
                required: true,
            },
            freelance:{
                type: 'string',
                required: true,
            },
            address:{
                type: 'string',
                required: true,
            },
            phone:{
                type: 'string',
                required: true,
            },
            email:{
                type: 'string',
                required: true,
            },
            skype:{
                type: 'string',
                required: true,
            },
            lang:{
                type: 'string',
                required: true,
            }
        },
        personaContent: [
            { 
                index: {type: 'number', required: true,},
                num: {type: 'number', required: true,}, 
                content: {type: 'string', required: true,}
            },
        ],
        skills: [
            { 
                index: {type: 'number', required: true},
                number: {type: 'string', required: true}, 
                content: {type: 'string', required: true}
            }
        ],
        practice: {
            experiense: [
                {
                date: {type: 'string', required: true},
                title: {type: 'string', required: true}, 
                descr: {type: 'string', required: true}
                }
            ],
            education: [
                {
                    date: {type: 'string', required: true},
                    title: {type: 'string', required: true}, 
                    descr: {type: 'string', required: true}
                }
            ]
        }
    }
})

module.exports = mongoose.model('Pages', PagesModel)