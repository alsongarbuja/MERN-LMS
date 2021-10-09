import axios from "axios"
import { FormEvent, useEffect, useState } from "react"
import { Edit2, Eye, Trash2 } from "react-feather"
import { Link } from "react-router-dom"

import Table from "../../layouts/crud-layouts/index"
import { BookModel } from "./utils/interfaces"

const cols: string[] = ["Name", "Author", "Genre", "Available number"]

const Book = () => {
    const [books, setBooks] = useState<BookModel[]>([])

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/books`)
            .then((res: {
                data: {
                    books: BookModel[]
                }
            }) => {
                setBooks(res.data.books);
            })
    }, [])

    const handleDelete = (e: FormEvent, i: string) => {
        e.preventDefault()

        if(window.confirm('Are you sure you want to delete this book?'))
            axios.delete(`http://localhost:5000/api/v1/books/${i}`)
                .then(res => console.log(res.data))

        window.location.reload()
    }

    return (
        <Table title="Books" columns={cols} hideCreate={false} createLink="/books/create">
            {
                books.length > 0 ? books.map((item, i) => (
                    <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.author}</td>
                        <td>{item.genres.map((genre, i) => (
                            <span className="badge bg-success rounded-pill mx-1" key={i}>{genre}</span>
                        ))}</td>
                        <td>{item.availableNumber}</td>
                        <td className="action-holder">
                            <Link to={`/books/show/${item._id}`}><Eye /></Link>
                            <Link to={`/books/edit/${item._id}`}><Edit2 /></Link>
                            <form onSubmit={e => handleDelete(e, item._id)} className="d-inline">
                                <button className="btn btn-sm btn-clean btn-icon btn-hover-danger"><Trash2 /></button>
                            </form>
                        </td>
                    </tr>
                )) : (
                    <tr>
                        <td colSpan={5} className="text-center">No data found</td>
                    </tr>
                )
            }
        </Table>
    )
}

export default Book
