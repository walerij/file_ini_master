const fs = require('fs')

const path = require('path') //подключим путь

fs.readFile(path.join(__dirname,'ini','pr.ini'),(err, data)=>{
    if(err) throw err

    console.log(Buffer.from(data).toString())
})

//console.log("это мастер работы с ini файлами")