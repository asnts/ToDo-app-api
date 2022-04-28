import DatabaseMetodos from "../src/DAO/DataBaseMetodos.js";

try {
    const table = await DatabaseMetodos.createTable()
    console.log(table)
    await DatabaseMetodos.popular(
        {
            id: 1, 
            nome:"José", 
            sobrenome: "das Couves", 
            email:"couve@mineira.com",
            telefone:" 2177777777"
        })

} catch (e) {
    console.log(e.message)
}




