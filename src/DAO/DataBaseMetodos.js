import Database from "../../infra/Database.js"

class DatabaseMetodos{
    static createTable(){
        const tabela_usuarios = `
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            email VARCHAR,
            telefone VARCHAR
        )
        `

        return new Promise ((resolve, reject) => {
            Database.run(tabela_usuarios, (e) => {
                if(e){
                    reject(e.message)
                } else {
                    resolve("Tabela criada com sucesso")
                }
            })
        })
    }

/***
 * 
 * @param {object} usuario
 * @returns Promisse <object>
 * 
 */

    static popular(usuario) {
        const query = `INSERT INTO usuarios VALUES (?, ?, ?, ?)`
        const body = Object.values(usuario)
        return new Promise((resolve, reject) => {
            Database.run(query, [...body], (e) => {
                if (e) {
                    reject(e) 
                } else { 
                    resolve({ message: "usuário criado com sucesso" }) 
                }
            })
        })
    }
}

export default DatabaseMetodos