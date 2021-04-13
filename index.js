var express = require("express")
require('dotenv').config()
var app = express()
var memsRoutes = require("./routes/mems")
var usersRouters = require("./routes/users.js")
const tagsRoutes = require("./routes/tags.js")
var mongoose = require("mongoose")
const cors = require('cors')
const path = require('path');
const publicPath = path.join(__dirname,  'build');

const url = process.env.URL

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })


app.use(express.json())
app.use(cors())
app.use(express.static(publicPath ))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use("/api/tags", tagsRoutes)
app.use("/api/mems" , memsRoutes)
app.use("/api/users", usersRouters )

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})