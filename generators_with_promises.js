var fs = require('fs');

function* readAll(){
  var data = yield( reader("stuff.txt") )
  var dataTwo = yield( reader("stuff_two.txt") )
  const combinedArray = data.split(",").concat( dataTwo.split(",") )
  console.log("combined", combinedArray )
}

var it = readAll();
const out = it.next();//start it off

function reader(fileName){
  fs.readFile(fileName,  "utf-8", (err, data)=>{
    if(err){
      console.log("error")
    }else{
      console.log("got stuff 1", data)
      it.next(data)
    }
  })
}
