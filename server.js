const express = require("express")
const app = express()

const port = 8080;

//Passando a porta e uma mensagem pra avisar que está funcionando
app.listen(port, function() {
    console.log("Hi, The doom ")
})

//Criando rota
app.get("/", function(req, res) {
    console.log("Primeira Rota");
    res.send("Hello World");
})

app.get("/cadastrar", function(req, res) {
    console.log("Rota de Cadastro");
})

app.post("/inserir", function(req, res) {
    console.log("usuário inserido");
})

app.delete("/delete", function(req, res) {
    console.log("Usuário Deletado")
})

app.update("alterar", function(req, res){
    console.log("Usuário Alterado")
})