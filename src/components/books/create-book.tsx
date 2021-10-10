import axios from "axios"
import React, { useState } from "react"
import Create from "../../layouts/crud-layouts/create"

const CreateBook = () => {
    const [book, setBook] = useState({
        name: '',
        author: '',
        description: '',
        availableNumber: 0,
        genres: ['']
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

        axios.post('http://localhost:5000/api/v1/books', book)
            .then(res => console.log(res.data))

        window.location.href = '/books'
    }

    return (
        <Create title="Create Book">
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
                        <label htmlFor="">Genre: </label>
                        <input type="text" className="form-control" 
                            name="genres"
                            value={book.genres}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group row mt-4">
                    <div className="col-12">
                        <label htmlFor="">Description: *</label>
                        <textarea required name="description" className="form-control" 
                            cols={30} rows={10}
                            value={book.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>
            </form>
        </Create>
    )
}

export default CreateBook
