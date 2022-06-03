const express = require("express");
const connection = require("./DataBase/connection.js");
const bodyparser = require('body-parser');
const path = require('path')

const EmployeeRouter = require('./employee/employeeController');

const app = express();



app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

app.use('/',EmployeeRouter);


connection
    .authenticate()
    .then(()=> {
        console.log("connection completed");
    })
    .catch((error)=>{console.log(error)});

app.get('/', (req, res)=>{
  res.render('index.ejs')
})
app.listen(8080, ()=> 
    {
        console.log("working");
        
    });
    


