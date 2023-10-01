const express = require("express");
const Parser = require("body-parser");
const bodyParser = require("body-parser");
const mysql=require("mysql2")
const app =express()
const port =process.env.POTT || 5000
const db =require('./config/database');
const modelexpor =require('./models/index')

app.use( bodyParser.urlencoded({extended:true}))
app.use( bodyParser.json())


//////////////////Routes////////////////////////
const MesurRoute =require('./routes/Mesur')
const CuveRouter =require('./routes/Cuve')
/////////////////////////////////////////////////




app.use('/api',CuveRouter)
app.use('/api',MesurRoute)

///////////////////////CNX SQL//////////////////
const db2 = mysql.createConnection({
  host: "91.134.151.72",
  user: "brzukxvw_STS",
  password: "6$bT~{h8PgAf",
  database: "brzukxvw_GSTS"
});
///////////////////////CNX SQL 2 //////////////////
const dbclient = mysql.createConnection({
  host: "91.134.151.72",
  user: "brzukxvw_STS",
  password: "6$bT~{h8PgAf",
  database: "brzukxvw_STS"
});
dbclient.connect((err)=>{
  if (err) throw err;  
  console.log(`kaboul 2`);
  });
///////////////////////////////////////////////


  app.post("/login", (req, res) => {
     const sql = "SELECT * FROM Compte  WHERE NomUtilisateur = ? AND MotDePasse = ? ";
     db2.query(sql, [req.body.Name,req.body.Password],(err,data_)=>{
    //  db.query(sql, ["raouf","123"],(err,data)=>{
       if (err){
         return res.json("Error");
       } 
       if (data_.length >0 ) {
  
        const sql2 = "SELECT * FROM Clients WHERE IDClient  = ?" ;
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
        modelexpor.exMdl().then

        //module.exports.x = valeur_
        
        //setFn(valeur_)
       
            return res.json(data_)
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

   app.post("/station", (req, res) => {
    const sql = "SELECT * FROM Station WHERE IDClient = ? "
    db2.query(sql,req.body.IDClien,(err,data_)=>{
      if (err){
        return res.json(err); 
      } 
      if (data_.length >0 ) {
        return res.json(data_);
      }else{
                return res.json("Failed");
            }
          })})


   app.get("/stations", (req, res) => {
    const sql = "SELECT * FROM Station "
    db2.query(sql,(err,data_)=>{
      if (err){
        return res.json(err);
      } 
      if (data_.length >0 ) {

        return res.json(data_);
      }else{
                return res.json("Failed");
            }
          })})



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




