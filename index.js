//Para ver como o site final deve funcionar, execute "node solução.js".
//Certifique-se de ter instalado todas as dependências com "npm i".
//A senha é ILoveProgramming

import express from "express"


const app = express()
const port = 3000


app.get("/", (req, res) =>{
    res.send("<h1>Hola</h1>")
})

app.listen(port, () =>{
    console.log(`Servidor funcionando na porta:${port}`)
})