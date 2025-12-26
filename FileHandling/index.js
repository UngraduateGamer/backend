const fs = require('fs')

// write file
// isse ham kisi file ke andar kush content lekh sakte hain agar file na ho to file create hogi aur usme content override hoga
fs.writeFile('myFileNew.txt','Hello this is file data ',function(err){
  if(err){
    console.log(err)
  }  
  else{
    console.log("File data Write Successfully. ")
  }
})

// read file
// isse ham kisi existing file ke data ko read kr sakta hain
// utf-8 se ham data ko english me convert kr sakte hain 
fs.readFile('myFileNew.txt','utf8',function(err,data){
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})


// append data 
// issme ham kisi existing file ke last me data add kr sakte hain agar file nai hai to new file create ho jayega  
fs.appendFile('myFile.txt',' appended data',function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("Data Appended.")
    }
})


// rename file
// isse ham file ke name ko rename kr sakte hain
fs.rename('myFile.txt','RenamedFile.txt',function (err){
    if(err) console.log(err)
    else console.log("File renamed Successfully")
})

// unlink file
// isse ham file ko delete kr sakte ho 
fs.unlink('RenamedFile.txt',function (err){
    if(err){
        console.log(err)
    }
    else{
        console.log("File Deleted")
    }
})

// create folder
// issme ham new folder create kr skte hain 
fs.mkdir('Folder 1',function (err){
    if(err){
        console.log(err)
    }
    else{
        console.log("Folder Created")}
})


fs.readdir('Folder 1',{withFileTypes:true},function(err,files){
    if(err){
        console.log(err)
    }
    else{
        console.log(files)
    }
})