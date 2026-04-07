const express = require("express")
const app = express()
const path = require("path")

app.use(express.static(path.join(__dirname)))
app.use(express.json())

app.get("/", (req, res) => {
  res.json({ 
    status: "success",
    message: "Hello, World!"
  })
})
const arr = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Doe" }
]
app.get("/profile/:id", (req, res) => {
  const profile = arr.find(n=>n.id === Number(req.params.id))
  res.send(`welcome to page ${profile.name}`)
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})