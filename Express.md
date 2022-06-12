# Comandos Básicos Node/Express


## Iniciar Projeto Node
 → ___<span style="color:#3CB371">npm init -y___</span>
## Instalação do Express
 → ___<span style="color:#3CB371">npm install --save</span>___  
  ↳ A pasta "**node_modules**" armazena os arquivos dos modulos

<hr>

## Importar o Express
→ Pode ser usado o Import ou Require.   

↳ ___<span style="color:#3CB371">import express from "express";</span>___  
↳ ___<span style="color:#3CB371">const express = require("express");</span>___  

## Instanciar o Express
→ Com Import ou Require, a instancia é igual, é uma boa prática declarar como constante para evitar possiveis erros.  
  
↳ ___<span style="color:#3CB371">const app = express();</span>___

<hr>  

# Trabalhando com rotas

## Iniciar o Servidor
→ É usado a função listen( ), que recebe como parametro a porta e os erros consecutivamente, o servidor deve ser iniciado no final do código.  
  
↳ ___<span style="color:#3CB371">app.listen(5050, (erro)=>{</span>___   
___<span style="color:#3CB371">})</span>___

## Criando Rotas GET
→ É usado a função get( ) que recebe como parametro o url e a função executada na rota, essa função deve receber uma requisição e uma resposta, para enviar a resposta deve ser usado a função send( ).  
    
↳ ___<span style="color:#3CB371">app.get("/", (req, res)=>{</span>___  
       ___<span style="color:#3CB371">res.send(`"<h1>Hello World !</h1>"`)</span>___  
___<span style="color:#3CB371">})</span>___

## Recebendo Parametros
→ Para criar um parametro, na Url da rota deve ser usado uma barra, seguida de um nome para variável, da seguinte forma: 
`/:Var`, caso seja um parametro opcional, basta colocar uma interrogação no final: `/:Var?`  

## Acessando parametros 
→ para acessar os parametros é necessario utilizar o parametro de req da rota da seguinte forma: `req.params.Var`, assim resultando em algo assim:  
  
↳ ___<span style="color:#3CB371">app.get("/:nome", (req, res)=>{</span>___  
       ___<span style="color:#3CB371">res.send(`<h1>Bem vindo ${req.params.nome} </h1>`)</span>___  
___<span style="color:#3CB371">})</span>___  

## Query Params
→  { <span style="color: red">Entrando em Desuso</span> } São parametros passados pela url que não precisam ser definidos na rota, eles seguem a seguinte sintaxe:
`www.localhost:5050/?Parametro=etc`, para acessa-los basta usar a o parametro req da rota, da seguinte forma:  
↳ ___<span style="color:#3CB371">req.query["Parametro"]</span>___