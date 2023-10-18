import express from "express"
import mongoose from "mongoose"
import { Book } from "./Model/bookmodel.js"
import { addBook } from "./Controller/AddBook.js"
import { getBooks, getBookById, updateBookById, deleteBook } from "./Controller/GetBooks.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.post('/books/', addBook)
app.get('/books/', getBooks)
app.get('/books/:id', getBookById)
app.put('/books/:id', updateBookById)
app.delete('/books/:id', deleteBook)
// app.post("/books", async(req, res) => {
//     if(!req.body.title || !req.body.author || !req.body.publishedYear) {
//         return res.status(400).send("Unable to fetch data from body")
//     }
//     const newbook = {
//         title: req.body.title,
//         author: req.body.author,
//         publishedYear: req.body.publishedYear,
//     }
//     const book = await Book.create(newbook)
    
// })

mongoose.connect("mongodb+srv://mchandrashekar021:gjjvfOEpX9psij1N@cluster0.jgbv8yd.mongodb.net/?retryWrites=true&w=majority")
        .then(() => {
            console.log("connected to mongodb!!!")
            app.listen(5555, () => {
                console.log("server is running on port no 5555")
            })
        })
        .catch(err => {
            console.log(err)
        })

