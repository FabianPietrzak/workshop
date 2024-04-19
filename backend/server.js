const express = require("express")
const cors = require("cors")


const app = express()

app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    
    res.json({message: "aaa ;)"})
})


const port = process.env.PORT || 8080

require("./routes/routes")(app)

app.listen(port, ()=>{
    console.log(`Server running on: localhost:${port}.`)
})

