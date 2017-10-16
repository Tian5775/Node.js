var db = require('./db');

db.sql("update MSreplication_options set major_version = 40 where optname = 'transactional'",function(err,result){
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
});


db.sql("select * from MSreplication_options",function(err,result){
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
});