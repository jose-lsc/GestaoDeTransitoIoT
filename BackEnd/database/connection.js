const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const db = new sqlite3.Database(path.resolve(__dirname, "iot.db"), (err) => {
    if(err){
        console.error("Erro ao conectar ao banco", err);
    }else{
        console.log("Banco conectado");
        db.run(`
            CREATE TABLE IF NOT EXISTS infracoes(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                temperatura REAL,
                umidade REAL,
                luminosidade REAL,
                infracao INTEGER,
                timestamp TEXT
            
            )    
        `)
    }

})

module.exports = db;


