const express = require("express");
const cors = require("cors");
const sensorRoutes  = require("./routes/SensorRoutes");
const swaggerUI     = require("swagger-ui-express");
const swaggerSpec   = require("./docs/Swagger");

const app = express();
app.use(cors({
    origin: "*"  // libera qualquer front, útil para teste
}));
app.use(express.json());
app.use("/api", sensorRoutes);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`Swagger em http://localhost:${PORT}/docs`);
})
