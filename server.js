const express = require('express')
const cors = require('cors')

const githubRoutes = require('./routes/github-routes')
const googleRoutes = require('./routes/google-routes')
const PORT = process.env.PORT || 3000

const app = express()
app.use(cors({
     origin:"http://localhost:3001",
    methods:"GET,POST"
}))

app.use(express.json())
app.use('/api/github',githubRoutes)
app.use('/api/google',googleRoutes)

app.listen(PORT,()=>console.log('Server on port',PORT))