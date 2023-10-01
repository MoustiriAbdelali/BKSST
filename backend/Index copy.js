const express = require("express");
const Parser = require("body-parser");
const bodyParser = require("body-parser");
const mysql=require("mysql2")
const app =express()
const port =process.env.POTT || 5000
const db =require('./config/database');
const { user } = require("./models");
const userRoutes =require('./routes/users')
const modelexpor =require('./models/index')



app.use( bodyParser.urlencoded({extended:true}))
app.use( bodyParser.json())
app.use('/',userRoutes)


const db2 = mysql.createConnection({
  host: "91.134.151.72",
  user: "brzukxvw_STS",
  password: "6$bT~{h8PgAf",
  database: "brzukxvw_GSTS"
});
db2.connect((err)=>{
  if (err) throw err;  
  console.log(`kaboul`);


  });
// testing cnx


// app.get("/", (req, res) => {
// res.send("send to chrom")
// });


//"SELECT * FROM `Clients` WHERE 1"
let valeur_ = {
  host:     "" ,
  database:"" ,
  username:"" ,
  password: "" ,
}


app.post("/login", () => {
 modelexpor.exMdl()
})

function renvoyer (){

  app.post("/login", (req, res) => {


    // res.json({ message: "Database Connected" });
     const sql = "SELECT * FROM Compte  WHERE NomUtilisateur = ? AND MotDePasse = ? ";
     db2.query(sql, [req.body.Name,req.body.Password],(err,data_)=>{
    //  db.query(sql, ["raouf","123"],(err,data)=>{
       if (err){
         return res.json("Error");
       } 
       if (data_.length >0 ) {
  
        const sql2 = "SELECT * FROM Clients WHERE IDClients   = ?" ;
        db2.query(sql2,data_[0].IDClients,(err_,dataClient)=>{
          if (err_){
            return res.json("Error");   
          } 
          if (dataClient.length >0 ) { 
  
  
            valeur_ = {
              host:     dataClient[0].Host ,
              database: dataClient[0].bdd ,
              username: dataClient[0].UserName ,
              password: dataClient[0].passeword , 
        }
  
        //setFn(valeur_)
       
            return res.json("Success")
          }
            else{
                return res.json("Failed");
            }
        })
      }
  
  
  
  
      
  
       
         else{
             return res.json("Failed");
             console.log("3");
         }
     })
            // return res.json({ data: "Success" });
   }
   
   )
}


  //  app.use('/api/v1',user)

  db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully ');
  })
  .catch(err => {
    console.log('Unable to connect to the database:', err);
  });

app.listen(port, () => { 
    console.log(`Server is running on portyes `);
  });




  // function  setFn () {

  //   console.log("setfn",valeur_)
  //   module.exports.x ="5"; 
  // }

  function setFn  () {
    val="44"
    module.exports.x = val; 
  }

  module.exports={x:valeur_,renvoyer}