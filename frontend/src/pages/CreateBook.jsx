import axios from 'axios'
import { useState } from 'react'
import { Spinner } from '../components/Spinner'
import { BackButton } from '../components/BackButton'
import { useNavigate } from 'react-router-dom'

export const CreateBook = () => {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [publishedYear, setPublishedYear] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = () => {
        const newBook = {
            title,
            author,
            publishedYear
        }
        setLoading(true)
        axios.post('http://localhost:5555/books/', newBook)
            .then(() => {
                setLoading(false)
            })
            .catch((err) => {
                setLoading(false)
                console.log(err)
            })
        navigate('/')
    }

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4' >Create book</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                    <form onSubmit={handleSubmit}>
                        <div className='my-4'>
                            <label htmlFor='book' className='text-xl mr-4 text-gray-500'>Title: </label>
                            <input
                                type='text'
                                id='book'
                                value={title}
                                className='border-2 border-gray-500 px-4 py-2 w-full'
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className='my-4'>
                            <label htmlFor='author' className='text-xl mr-4 text-gray-500'>Author: </label>
                            <input
                                type='text'
                                id='author'
                                value={author}
                                className='border-2 border-gray-500 px-4 py-2 w-full'
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </div>
                        <div className='my-4'>
                            <label htmlFor='year' className='text-xl mr-4 text-gray-500'>Year of Publication: </label>
                            <input
                                type='text'
                                id='year'
                                value={publishedYear}
                                className='border-2 border-gray-500 px-4 py-2 w-full'
                                onChange={(e) => setPublishedYear(e.target.value)}
                            />
                        </div>
                        <button className='p-2 bg-sky-300 m-8' type="submit" >Add Book</button>
                    </form>
                </div>
            )}

        </div>
    )
}