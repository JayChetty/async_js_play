const fs = require('fs');
function fileReader(fileName){
  return new Promise( (resolve, reject)=>{
    fs.readFile(fileName,  "utf-8", (err, data)=>{
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}


let combined = [];
fileReader("stuff.txt")
.then((data)=>{
  console.log("Got data", data);
  combined = data.split(",");
  return fileReader("stuff_two.txt")
})
.then((data)=>{
  console.log("Got other data", data);
  combined = combined.concat(data.split(","))
  console.log("combined", combined);
})
.catch((err)=>{
  console.log("Didnt work", err);
})
