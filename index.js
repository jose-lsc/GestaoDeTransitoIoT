const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();
app.use(express.json());

const port = 3000;

// Simulação de banco
let infracoes = [];

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         email:
 *           type: string
 *     Infracao:
 *       type: object
 *       properties:
 *         temperatura:
 *           type: number
 *         umidade:
 *           type: number
 *         luminosidade:
 *           type: number
 *         infracao:
 *           type: string
 *         timestamp:
 *           type: string
 *           format: date-time
 */

/**
 * @swagger
 * /infracoes:
 *   get:
 *     summary: Lista todas as infrações cometidas
 *     responses:
 *       200:
 *         description: Lista de infrações cometidas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Infracao'
 */
app.get("/infracoes", (req, res) => {
    res.json(infracoes);
});

/**
 * @swagger
 * /enviarDados:
 *   post:
 *     summary: Cria um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Infracao'
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *     content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Infracao'
 */
app.post("/enviarDados", (req, res) => {

    const {
        temperatura,
        umidade,
        luminosidade,
        infracao,
        timestamp
    } = req.body;

    const newInfracao = {
        id: infracoes.length + 1,
        temperatura,
        umidade,
        luminosidade,
        infracao,
        timestamp
    };

    infracoes.push(newInfracao);
    res.status(201).json(newInfracao);
});

// Swagger config
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Minha API",
            version: "1.0.0",
            description: "API simples com Node.js e Swagger",
        },
    },
    apis: ["./index.js"],
};

const specs = swaggerJsdoc(options);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
    console.log(`📚 Swagger em http://localhost:${port}/docs`);
});