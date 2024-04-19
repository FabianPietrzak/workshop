const mysql = require("mysql")
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: "warsztat"
})

connection.connect()


exports.test = async (req,res) => {
    res.status(200).send(req.body)
}
exports.pracownicySelect = async (req,res) => {
    try{
        
        connection.query("SELECT * from pracownicy", function (error, results, fields){
            if(error) throw error
            res.status(200).send(results)
        })
    }catch(error){
        return res.status(500).send({message: error.message})
    }
    
}
exports.pracownicyInsert = async (req,res) => {
    try{
        connection.query(`INSERT INTO pracownicy (imie, nazwisko, tel, email) VALUES ('${req.body.imie}','${req.body.nazwisko}','${req.body.tel}','${req.body.email}')`, function (error, results, fields){
            if(error) throw error
            res.status(200).send(results)
        })
    }catch(error){
        return res.status(500).send({message: error.message})
    }
    
}
exports.pracownicyUpdate = async (req,res) => {
    try{
        connection.query(`UPDATE pracownicy SET imie='${req.body.imie}',nazwisko='${req.body.nazwisko}',tel='${req.body.tel}',email='${req.body.email}' WHERE id=${req.body.id};`, function (error, results, fields){
            if(error) throw error
            res.status(200).send(results)
        })
    }catch(error){
        return res.status(500).send({message: error.message})
    }
    
}
exports.pracownicyDelete = async (req,res) => {
    try{
        connection.query(`DELETE FROM pracownicy WHERE id =${req.body.id}`, function (error, results, fields){
            if(error) throw error
            res.status(200).send(results)
        })
    }catch(error){
        return res.status(500).send({message: error.message})
    }
    
}
exports.magazynSelect = async (req,res) => {
    try{
        connection.query("SELECT * from magazyn", function (error, results, fields){
            if(error) throw error
            res.status(200).send(results)
        })
    }catch(error){
        return res.status(500).send({message: error.message})
    }
    
}
exports.magazynUpdate = async (req,res) => {
    try{
        connection.query(`UPDATE magazyn SET nazwa='${req.body.nazwa}',cena='${req.body.cena}',ilosc='${req.body.ilosc}',regal='${req.body.regal}',data_kupna='${req.body.data_kupna}',stan='${req.body.stan}'  WHERE id=${req.body.id};`, function (error, results, fields){
            if(error) throw error
            res.status(200).send(results)
        })
    }catch(error){
        return res.status(500).send({message: error.message})
    }
    
}
exports.magazynInsert = async (req,res) => {
    try{
        connection.query(`INSERT INTO magazyn (nazwa, cena, ilosc, regal, data_kupna, stan) VALUES ('${req.body.nazwa}','${req.body.cena}','${req.body.ilosc}','${req.body.regal}','${req.body.data_kupna}','${req.body.stan}')`, function (error, results, fields){
            if(error) throw error
            res.status(200).send(results)
        })
    }catch(error){
        return res.status(500).send({message: error.message})
    }
    
}
exports.magazynDelete = async (req,res) => {
    try{
        connection.query(`DELETE FROM magazyn WHERE id =${req.body.id}`, function (error, results, fields){
            if(error) throw error
            res.status(200).send(results)
        })
    }catch(error){
        return res.status(500).send({message: error.message})
    }
}
exports.tasksInsert = async (req,res) => {
    try{
        connection.query(`INSERT INTO zlecenia( id_pracownika, imie_klienta, nazwisko_klienta, nr_tel_klienta, email_klienta, opis, wycena, stan, cena, data_przyjecia, data_zakonczenia) VALUES ('${req.body.id_pracownika}', '${req.body.imie_klienta}', '${req.body.nazwisko_klienta}', '${req.body.nr_tel_klienta}', '${req.body.email_klienta}','${req.body.opis}', '${req.body.wycena}', '${req.body.stan}', '${req.body.cena}', '${req.body.data_przyjecia}', '${req.body.data_zakonczenia}')`, function (error, results, fields){
            if(error) throw error
            res.status(200).send(results)
        })
    }catch(error){
        return res.status(500).send({message: error.message})
    }
    
}
exports.tasksUpdate = async (req,res) => {
    try{
        connection.query(`UPDATE zlecenia SET id_pracownika ='${req.body.id_pracownika}'   , imie_klienta='${req.body.imie_klienta}', nazwisko_klienta='${req.body.nazwisko_klienta}', nr_tel_klienta='${req.body.nr_tel_klienta}', email_klienta='${req.body.email_klienta}', opis='${req.body.opis}', wycena='${req.body.wycena}', stan='${req.body.stan}', cena='${req.body.cena}', data_przyjecia='${req.body.data_przyjecia}', data_zakonczenia='${req.body.data_zakonczenia}' WHERE id=${req.body.id};`, function (error, results, fields){
            if(error) throw error
            res.status(200).send(results)
        })
    }catch(error){
        return res.status(500).send({message: error.message})
    }
    
}
exports.tasksDelete = async (req,res) => {
    try{
        connection.query(`DELETE FROM zlecenia WHERE id =${req.body.id}`, function (error, results, fields){
            if(error) throw error
            res.status(200).send(results)
        })
    }catch(error){
        return res.status(500).send({message: error.message})
    }
}
exports.tasksSelect = async (req,res) => {
    try{
        connection.query("SELECT * from zlecenia;", function (error, results, fields){
            if(error) throw error
            res.status(200).send(results)
        })
    }catch(error){
        return res.status(500).send({message: error.message})
    }
    
}