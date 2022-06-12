# Comandos Básicos Node/Express


### Iniciar Projeto Node
 → ___npm init -y___
### Instalação do Express
 → ___npm install --save___  
  ↳ A pasta "**node_modules**" armazena os arquivos dos modulos

<hr>

### Importar o Express
→ Pode ser usado o Import ou Require.   

↳ ___import express from "express";___  
↳ ___const express = require("express");___  

### Instanciar o Express
→ Com Import ou Require, a instancia é igual, é uma boa prática declarar como constante para evitar possiveis erros.  
  
↳ ___const app = express();___

<hr>  

## Trabalhando com rotas

### Iniciar o Servidor
→ É usado a função listen( ), que recebe como parametro a porta e os erros consecutivamente, o servidor deve ser iniciado no final do código.  
  
↳ ___app.listen(5050, (erro)=>{___   
___})___

### Criando Rotas GET
→ É usado a função get( ) que recebe como parametro o url e a função executada na rota, essa função deve receber uma requisição e uma resposta, para enviar a resposta deve ser usado a função send( ).  
    
↳ ___app.get("/", (req, res)=>{___  
       ___res.send(`"<h1>Hello World !</h1>"`)___  
___})___

### Recebendo Parametros
→ Para criar um parametro, na Url da rota deve ser usado uma barra, seguida de um nome para variável, da seguinte forma: 
`/:Var`, caso seja um parametro opcional, basta colocar uma interrogação no final: `/:Var?`  

### Acessando parametros 
→ para acessar os parametros é necessario utilizar o parametro de req da rota da seguinte forma: `req.params.Var`, assim resultando em algo assim:  
  
↳ ___app.get("/:nome", (req, res)=>{___  
       ___res.send(`<h1>Bem vindo ${req.params.nome} </h1>`)___  
___})___  

### Query Params
→  { <span style="color: red">Entrando em Desuso</span> } São parametros passados pela url que não precisam ser definidos na rota, eles seguem a seguinte sintaxe:
`www.localhost:5050/?Parametro=etc`, para acessa-los basta usar a o parametro req da rota, da seguinte forma:  
↳ ___req.query["Parametro"]___