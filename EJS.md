# Comandos Básicos Node | EJS


## Instalando o EJS

→ ___npm install ejs___

## Utilizando o EJS

→ Para que seja utilizado a template engine EJS deve ser definido como o padrão do express da seguinte forma:  
  
↳ ___app.set('view engine', 'ejs')___  
  
→ Com isso, tudo estará configurado para que seja renderizado o html, para isso é necessario configurar a resposta de uma rota da seguinte forma:  
  
↳ ___res.render("index")___

## Enviando Valores ao HTML

→ Para enviar valores ou variaveis para o html pelo EJS basta definir um objeto dentro do reder com os campos que serão enviados    
↳ ___res.render("index", {nome: "Victor Hugo", idade: 18})___  

## Exibindo Valores ao HTML
→ Para usar o EJS no html, deve ser usado a tag `<% %>`, para chamar variaveis passados pelo node, deve usar um igual a frente da abertura da tag, seguindo a seguinte sintaxe:  
↳ ___` <%= nome %>`___  
→ Além disso pode ser usado estruturas de condição e repetição do javascript via EJS  

## Trabalhando com Partials
→ Partial, é uma forma de reutilizar html sem que seja necessario ficar dando ctrl c + ctrl v, seria uma forma de criação de templates, para incluir um partial em seu html, basta usar o seguinte comando:  
↳ `<%- include("pasta/arquivo.ejs"); %>`


