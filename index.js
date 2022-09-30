const express = require('express')
const app = express()
const port = 3000
const db = require("./db")

app.get('/', (req, res) => {
  res.json(db.listVendor())
})

app.get("/:id", (req, res) => {
    const vendor = db.getVendor(req.params.id)
    if (!vendor) {
        res.status(404).json({ message: `vendor with ${req.params.id} not found`})
    } else {
        res.status(200).json(vendor)
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
