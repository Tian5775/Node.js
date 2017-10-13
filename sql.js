var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'QUXUEYANG\Tian',
    password: '',
    port:'1433',
    database: 'master'
});

connection.connect();

var sql = 'select * from MSreplication_options';
connection.query(sql,function(err,result){
   if(err){
       console.log("error");
   }

    console.log(result);
});

connection.end();