const mysql      = require('mysql2');
function executaSQL (query,res) {


const conexao = mysql.createConnection({
    host     : 'localhost',
    port     : 3306, 
    user     : 'root',
    password : 'root',
    database: 'projeto',
   
  });


conexao.query(query, function(error, results){
    if(error){ 
      res.json(error);
    }else{
      res.json(results);
    }
    connection.end();
    console.log('sucesso!');
  });
  }
  
  module.exports= executaSQL;