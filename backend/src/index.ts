import http from 'http'
const server = http.createServer((req,res)=>{
    switch(req.url){
        case "/":
            res.write("hello")
            res.end()
            break

            case"/home":
            res.write("homee")
            res.end()
            break
    }
  
})
server.listen(3000, ()=>{
    console.log("server is running")
})