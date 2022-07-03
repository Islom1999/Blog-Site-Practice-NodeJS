const { Router } = require('express')

const router = Router()   
 
router.get('/', (req,res) => {
    res.render('admin/dash', {
        admin: 'admin',
        url: process.env.URL
    })
})

module.exports = router


