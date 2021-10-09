import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import Show from '../../layouts/crud-layouts/show'
import { BookModel } from "./utils/interfaces"

const ShowBook = () => {
    const [book, setBook] = useState<BookModel>({
        name: '',
        author: '',
        availableNumber: 0,
        genres: [''],
        _id: '',
    })
    const params: {id: string} = useParams()
    const id = params.id

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/books/${id}`)
            .then((res: {
                data: {
                    book: BookModel
                }
            }) => {
                setBook(res.data.book)
            })
    }, [])

    return (
        <Show title="Book Detail" id={params.id} route="books">
            <div className="row">
                <div className="col-md-6">
                    <span className="font-bold">Book: </span> {book.name}
                </div>
                <div className="col-md-6">
                    <span className="font-bold">Author: </span> {book.author}
                </div>
                <div className="col-md-6 mt-4">
                    <span className="font-bold">Genres: </span> 
                    {
                        book.genres?.map((genre, i) => (
                            <span className="badge bg-success rounded-pill" key={i}>{genre}</span>
                        ))
                    }
                </div>
                <div className="col-md-6 mt-4">
                    <span className="font-bold">Available Number: </span> {book.availableNumber}
                </div>
            </div>
        </Show>
    )
}

export default ShowBook
