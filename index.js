const {port} = require('./Source/Configs')
const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const mainNavigation = require('./source/Routes')
const cors = require('cors')

app.use(cors('*'))
app.listen(4500, () => console.log('\n This server is running'))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use('/', mainNavigation)
