
import {validatarefas, log} from "../services/validacoes.js"
import DataBase from "../../infra/DataBase.js"
import TarefasModel from "../models/tarefasModel.js"
import res from "express/lib/response"



class tarefas{
    static routers(app){

        app.get("/", (req, res) => {
            // if(validatarefas('tarefasDiarias')){
                res.send(DataBase)


            // }else{
            //     res.send("<h1> Deu ruim </h1>")
            // }
        })

        app.get("/tarefas/", (req, res ) => {
            const email = req.params.email
            console.log(email)
            res.status(200).json(obj.titulo)

        })
       
        app.post("/tarefas", (req, res ) => {
            const tarefa = new TarefasModel ((...Object.values (req.body))
                DataBase.push(tarefa)
            res.status(201).json(DataBase)
        })

    }
}

export default tarefas