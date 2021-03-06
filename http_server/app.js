const express = require('express')
const config = require('config')
const page_routes = require('./routes/page_routes')

const PORT = config.get('port')||8080
const app = express()

app.use(express.json({msExtendedCode: true}))
app.use('/', page_routes)

async function start() {
    console.log(`Http server starting over ${PORT} port...`)

    try{
        app.listen(PORT, ()=>console.log(`Server started SUCCESS...`))
    } catch (e) {
        console.log(`Server error = ${e.message}`)
        process.exit(1)
    }

}

start()
