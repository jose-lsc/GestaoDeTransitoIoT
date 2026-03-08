
//Instanciando o banco conectado no arquivo connection.js
const db = require("../database/connection");

exports.getSensor = (req, res) => {
    const sql = `
        SELECT * 
        FROM infracoes
    `;
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.status(200).json({
            dados: rows
        });
    });
}


exports.postSensor = (req, res) => {
    //Instanciando varias variaveis ao mesmo tempo
    const {
        temperatura,
        umidade,
        luminosidade,
        infracao,
        timestamp
    } = req.body;

    const sql = `
        INSERT INTO infracoes
        (temperatura, umidade, luminosidade, infracao, timestamp)
        VALUES (?, ?, ?, ?, ?) 
    `;

    const valores = [
        temperatura,
        umidade,
        luminosidade,
        infracao,
        timestamp
    ];

    db.run(sql, valores, function(err){
        if(err){
            return res.status(500).json({error: err.message})
        }

        res.status(201).json({
            mensagem: "Dados recebidos !",
            id: this.lastID
        })
    })

}