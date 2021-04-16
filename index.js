const express = require("express")
require('dotenv').config()
const app = express()
const memsRoutes = require("./routes/mems")
const usersRouters = require("./routes/users.js")
const tagsRoutes = require("./routes/tags.js")
const mongoose = require("mongoose")
const cors = require('cors')
const path = require('path');


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


app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use("/api/tags", tagsRoutes)
app.use("/api/mems" , memsRoutes)
app.use("/api/users", usersRouters )

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})