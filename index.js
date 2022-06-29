const express = require('express')
const { engine } = require('express-handlebars')
const path = require('path')
const env = require('dotenv')

const app = express()

env.config() 

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')))

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views');

app.use('/', require('./routes/pages'))


const PORT = process.env.PORT || 5000

app.listen(PORT, () => { 
    console.log(PORT)
})