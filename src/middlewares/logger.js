const fs=require("fs/promises");

function logger(req,res,next){
    const logString=`# ${req.method}  ${req.url} Data ${JSON.stringify(req?.body)}, client ${req.headers["user-agent"]}`
    fs.appendFile("./logs.txt",logString+"\n").then(data=>{
        next()
    }).catch(err=>{
        console.log(err)
    })
}

module.exports.logger=logger;