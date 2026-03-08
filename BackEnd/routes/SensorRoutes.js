const express = require("express");
const router = express.Router();
const sensonController = require("../controllers/SensorController")

/**
 * @swagger
 * /api/infracoes:
 *   get:
 *     summary: Retorna todos os sensores
 *     responses:
 *       200:
 *         description: Lista de sensores
 */
router.get("/infracoes", sensonController.getSensor);


/**
 * @swagger
 * /api/enviarDados:
 *   post:
 *     summary: Envia dados do sensor para a api
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               temperatura:
 *                 type: number
 *               umidade:
 *                 type: number
 *               luminosidade:
 *                 type: number
 *               infracao:
 *                 type: boolean
 *               timestamp:
 *                 type: string
 *     responses:
 *       200:
 *         description: Dados salvos
 */

router.post("/enviarDados", sensonController.postSensor);


module.exports = router;