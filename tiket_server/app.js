const express = require('express')

const PORT = 8008
const app = express()

app.use(express.json({msExtendedCode: true}))

async function start() {
    console.log(`Auth server starting over ${PORT} port...`)

    try{
        app.listen(PORT, ()=>console.log(`Auth server started SUCCESS...`))
    } catch (e) {
        console.log(`Auth server error = ${e.message}`)
        process.exit(1)
    }

}

start()
