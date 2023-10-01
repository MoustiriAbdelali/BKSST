const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require('mysql2');
app.use(cors());
app.use(express.json());

 

const db = mysql.createConnection({
  host: "91.134.151.72",
  user: "brzukxvw_STS",
  password: "6$bT~{h8PgAf",
  database: "brzukxvw_STS"
});


db.connect((err)=>{
  if (err) throw err;  
  console.log(`kaboul`);


  });


  app.post("/login", (req, res) => {
    // res.json({ message: "Database Connected" });
     const sql = "SELECT * FROM Compte  WHERE NomUtilisateur = ? AND MotDePasse = ? ";
     db.query(sql, [req.body.Name,req.body.password],(err,data_)=>{
    //  db.query(sql, ["raouf","123"],(err,data)=>{
       if (err){
         return res.json("Error");
         console.log("1");

       } 
       if (data_.length >0 ) {
         return res.json("Success");
        console.log("2");
        //  res.json("Success");
        //  return "Success";

       }
         else{
             return res.json("Failed");
             console.log("3");

         }
     })
            // return res.json({ data: "Success" });

   });

  // app.post('/message', (req,res)=>{
  //   const sql = "SELECT * FROM Compte WHERE UserName=? AND MotDePasse=? ";
  //   db.query(sql, [req.body.Name,req.body.password],(err,data)=>{
  //     if (err){
  //       return res.json("Error");
        
  //     } 
  //     if (data.length >0 ) {
  //       return res.json(data);
  //     }
  //       else{
  //           return res.json("Failed");
  //       }
  //   })
  
  // });




 

app.listen(8000, () => { 
  console.log(`Server is running on portyesy hhhhhhhhh  `);
});

