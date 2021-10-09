import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'

import Edit from '../../layouts/crud-layouts/edit'
import { BookModel } from "./utils/interfaces"

const EditBook = () => {
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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name
        const value = event.target.value

        if(name === 'genres'){
            const arr = value.split(',')
            setBook({...book, [name]: arr})
            return ;
        }

        setBook({...book, [name]: value})
    }

    const submitForm = (event: React.FormEvent) => {
        event.preventDefault()

        axios.patch(`http://localhost:5000/api/v1/books/${id}`, book)
            .then(res => console.log(res.data))

        window.location.href = '/books'
    }

    return (
        <Edit title="Edit Book">
            <form id="form" onSubmit={submitForm}>
                <div className="form-group row">
                    <div className="col-md-6">
                        <label htmlFor="">Book Name: *</label>
                        <input required type="text" className="form-control"
                            name="name" 
                            value={book.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="">Author Name: *</label>
                        <input required type="text" className="form-control"
                            name="author" 
                            value={book.author}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">Available pieces: *</label>
                        <input required type="number" className="form-control"
                            name="availableNumber"
                            value={book.availableNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">Genre: *</label>
                        <input required type="text" className="form-control" 
                            name="genres"
                            value={book.genres}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </form>
        </Edit>
    )
}

export default EditBook
