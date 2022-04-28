import express from "express";
import * as dotenv from "dotenv";
import tarefas from "./src/controllers/tarefas.js";
import DatabaseMetodos from "./src/DAO/DataBaseMetodos.js"
import cors from "cors"


dotenv.config()

const app = express()
const port = process.env.PORT || 3000
app.use(cors())
app.use(express.json())

app.listen(port, () => {
    console.log("Servidor em http://localhost:3000")
})



tarefas.routers(app)

export default app