
import {validatarefas, log} from "../services/validacoes.js"


class tarefas{
    static routers(app){

        app.get("/", (req, res) => {
            if(validatarefas('tarefasDiarias')){
                res.send('<h1> Rastreamento da aplicação sendo feito com nodemon </h1>')


            }else{
                res.send("<h1> Deu ruim </h1>")
            }
        })
       
        app.post("/tarefas", (req, res ) => {
            console.log(req.body)
            res.send('<h1> Qualquer coisa </h1>')
        })

    }
}

export default tarefas