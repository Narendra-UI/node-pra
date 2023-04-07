const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');


app.use(bodyparser.json);

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Raja@1234',
    database: 'tables'

});

mysqlConnection.connect((err) => {
    if(!err)
    console.log('DB connection succeded');
    else
    console.log('DB connection failed \n Error ' + JSON.stringify(err, undefined, 2));
})

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(4000,()=> console.log('Express server is running at port no : 4000'));

app.get('/emp',(res,req)=>{
    console.log("sgahga")
    mysqlConnection.query('SELECT * FROM Department',(err, rows, feilds)=>{
        if(!err)
        console.log(rows);
        else
        console.log(err);
    })
})