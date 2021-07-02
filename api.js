const express = require('express');
const executaSQL= require ('./dbconnect');


const app = express(); 

app.get ('/perguntas', function (req, res){
    let query = "SELECT * FROM projeto.perguntas;";   
    executaSQL (query,res);
 })


app.listen (8080); 
console.log ('servidor online na porta 8080'); 
