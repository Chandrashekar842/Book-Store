import { Book } from "../Model/bookmodel.js";

export const getBooks = async (req, res) => {
    const books = await Book.find()

    if(!books) {
        return res.status(400).json({message:"Cannot fetch books"})
    }

    return res.status(200).json({ 
        count: books.length,
        data: books
     })
}

export const getBookById = async (req, res, next) => {
    const id = req.params.id
    let book;
    try {
        book = await Book.findById(id)

        if(!book) {
            return res.status(400).json({message: "cannot fetch the book by id"})
        }
    } catch(err) {
        return next(err)
    }
    return res.status(200).json({book})
}

export const updateBookById = async (req, res, next) => {
    const id = req.params.id
    if(!req.body.title || !req.body.author || !req.body.publishedYear) {
        return res.status(500).json({message: "pass correct values from the body"})
    }
    const { title, author, publishedYear } = req.body

    const book = await Book.findByIdAndUpdate(id, {title, author, publishedYear})
    if(!book) {
        return res.status(400).json({message:"Cannot update the book"})
    }
    return res.status(200).json({message: "Updated successfully"})
}

export const deleteBook = async (req, res, next) => {
    const id = req.params.id
    try {
        await Book.findByIdAndDelete(id)
     } catch(err) {
        return next(err)
    }
    return res.status(200).json({message: "book deleted successfully!!!"})
}