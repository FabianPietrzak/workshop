const cnt = require("../controllers/db.controller")

module.exports = function(app){
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        )
        next()
    })

    app.get("/api/test", cnt.test)

    app.get("/api/pracownicy/select", cnt.pracownicySelect)
    app.post("/api/pracownicy/delete", cnt.pracownicyDelete)
    app.post("/api/pracownicy/insert", cnt.pracownicyInsert)
    app.post("/api/pracownicy/update", cnt.pracownicyUpdate)

    app.get("/api/magazyn/select", cnt.magazynSelect)
    app.post("/api/magazyn/delete", cnt.magazynDelete)
    app.post("/api/magazyn/insert", cnt.magazynInsert)
    app.post("/api/magazyn/update", cnt.magazynUpdate)

    app.get("/api/tasks/select", cnt.tasksSelect)
    app.post("/api/tasks/delete", cnt.tasksDelete)
    app.post("/api/tasks/insert", cnt.tasksInsert)
    app.post("/api/tasks/update", cnt.tasksUpdate)
}