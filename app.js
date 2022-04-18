import express from "express";
import * as dotenv from "dotenv";
import tarefas from "./src/controllers/tarefas.js";


dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.listen(port, () => {
    console.log("Servidor em http://localhost:${port}`")
})

tarefas.routers(app)

export default app