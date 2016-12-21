var fs = require('fs');

function promiseSagaWrapper( promise ){
  return promise.then((data)=>{
    return it.next( data );
  })
}

function readFile(fileName){
  return fileReader(fileName).then((data)=>{
    return data
  })
}

function* readAll(){
  var data = yield( promiseSagaWrapper( readFile("stuff.txt") ) )
  var dataTwo = yield(  promiseSagaWrapper( readFile("stuff_two.txt") ) )
  const combinedArray = data.split(",").concat( dataTwo.split(",") )
  console.log("combined", combinedArray )
}

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

var it = readAll();
const out = it.next();//start it off
