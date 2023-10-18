import { Book } from "../Model/bookmodel.js"

export const addBook = async (req, res) => {
    const title = req.body.title
    const author = req.body.author
    const publishedYear = req.body.publishedYear
    if(!title || !author || !publishedYear) {
        return res.status(400).send("send all fields")
    }

    const newBook = new Book({title, author, publishedYear})

    await newBook.save()

    return res.status(200).json({newBook})
}