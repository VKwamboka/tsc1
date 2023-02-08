// type
// import { Express } from "express";'

// framework
import  express, {json, Request, Response}  from "express"; 

const app= express()

app.use(json())

const books:String [] = []

app.post("/",(req:Request,res:Response)=>{
const {bookname} =req.body
books.push(bookname)

res.status(200).json(req.body)
console.log(books)
});

app.get("/",(req,res)=>{
res.status(200).json(books)
})



app.get("/:id",(req,res)=>{
    const book=+req.params.id
    res.status(200).json(books[book])
    
})

app.delete("/:id", (req, res)=>{
    const book=+req.params.id
    books.splice(book,1)
    res.status(200).json(books)
})

    app.listen(3000,()=>{
        console.log("Hello Vee")
    })





