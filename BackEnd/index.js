const express = require("express");

const sensorRoutes  = require("./routes/SensorRoutes");
const swaggerUI     = require("swagger-ui-express");
const swaggerSpec   = require("./docs/Swagger");

const app = express();

// middleware para ler JSON
app.use(express.json());

app.use("/api", sensorRoutes);

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

//Iniciar Servidor
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);

    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📚 Swagger em http://localhost:${PORT}/docs`);
})