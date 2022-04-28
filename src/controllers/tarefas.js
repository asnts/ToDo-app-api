
import Database from "../../infra/DataBase.js"
import TarefasModel from "../models/tarefasModel.js"
import DatabaseMetodos from "../DAO/DataBaseMetodos.js"



class tarefas{
    static routers(app){

        // app.get("/", async (req, res) => {
        //     {
        //         res.send(Database)


        //     // }else{
        //     //     res.send("<h1> Deu ruim </h1>")
        //     // }
        // })

        app.get("/tarefas/", async (req, res ) => {
            try {
                const email = await req.params.email
            console.log(`id: ${id}`);
            res.status(200).json(Database[id]);
            } catch (error) {
                res.status(400)(e.message)
            }
            
      

        })
       
        app.post("/tarefas", (req, res ) => {
            const tarefa = new TarefasModel (...Object.values(req.body))
                Database.push(tarefa)
            res.status(201).json(Database)
        })

        app.patch("/tarefas/:id", (req, res) => {
            res.status(200).json({"email":" registro atualizado"})
        })

    }
}

export default tarefas