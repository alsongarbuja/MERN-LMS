import React, {useState} from 'react'
import { useParams } from 'react-router'
import Edit from '../../layouts/crud-layouts/edit'

const data = [
    {
        name: "book 1",
        author: "author 1",
        genre: ["children's book"],
        available_number: 3,
    },
    {
        name: "book 2",
        author: "author 2",
        genre: ["fantasy", "ancient"],
        available_number: 0,
    },
    {
        name: "book 3",
        author: "author 3",
        genre: ["superhero"],
        available_number: 7,
    },
]

const EditBook = (
    // {data}:
    // {data: {
    //     bookName: string,
    //     authorName: string,
    //     availableNumber: number,
    //     genre: string[],
    // }}
) => {
    const params: {id: string} = useParams();
    const id = parseInt(params.id);

    const [book, setBook] = useState({
        bookName: data[id].name,
        authorName: data[id].author,
        availableNumber: data[id].available_number,
        genres: data[id].genre
    })

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

        console.log(book);
    }

    return (
        <Edit title="Edit Book">
            <form id="form" onSubmit={submitForm}>
                <div className="form-group row">
                    <div className="col-md-6">
                        <label htmlFor="">Book Name: *</label>
                        <input required type="text" className="form-control"
                            name="bookName" 
                            value={book.bookName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="">Author Name: *</label>
                        <input required type="text" className="form-control"
                            name="authorName" 
                            value={book.authorName}
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
