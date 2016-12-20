const fs = require('fs');


fs.readFile("stuff.txt", "utf-8", function(err, data){
  if(err){
    console.error("ouch on stuff", err)
  }else{
    fs.readFile("stuff_two.txt", "utf-8", function(err2, data2){
      if(err2){
        console.error("ouch on stuff2", err2)
      }else{
        const combinedArray = data.split(",").concat( data2.split(",") )
        console.log("combined", combinedArray )
      }
    })
  }
})
