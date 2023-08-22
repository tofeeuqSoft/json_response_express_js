let express=require('express');

app= express();

app.get('/', function (req, res){
   let myJsonArray=[
       {
           name: "Ridoy",
           city: "Bagmara",
           work:  "dokan"
       },
       {
           name: "Tauhidul Islam",
           city: "Rajshahi",
           work:  "Engr."
       },
       {
           name: "Imran",
           city: "Dhaka",
           work:  "Lower"
       }


   ]
    res.json(myJsonArray);
});



app.listen(5050, function (){
    console.log("server run success")
});