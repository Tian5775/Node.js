var sql = require('mssql');
//���ӷ�ʽ1��"mssql://�û���:����@ip��ַ������˿ںţ�/SqlServer��/���ݿ�����"
//���ӷ�ʽ2��"mssql://�û���:����@ip��ַ:1433(Ĭ�϶˿ں�)/���ݿ�����"
sql.connect("mssql://sa:123@localhost/john/test").then(function() {
//sql.connect("mssql://sa:123@localhost:1433/test").then(function() {
    // Query
    new sql.Request().query('select * from sys_user').then(function(recordset) {
        console.log(recordset);
    }).catch(function(err) {
        console.log(err);
    });
    // Stored Procedure
}).catch(function(err) {
    console.log(err);
});