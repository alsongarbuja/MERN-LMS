import { FormEvent } from "react"
import { Edit2, Eye, Trash2 } from "react-feather"
import { Link } from "react-router-dom"
import Table from "../../layouts/crud-layouts/index"

const cols: string[] = ["Name", "Author", "Genre", "Available number"]
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

const Tbody = () => {
    const handleDelete = (e: FormEvent, i: number) => {
        e.preventDefault()

        if(window.confirm('Are you sure you want to delete this book?'))
            console.log(`deleted book with id: ${i}`);
    }

    return (
        <>
        {
            data.map((item, i) => (
                <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.author}</td>
                    <td>{item.genre.map((genre, i) => (
                        <span className="badge bg-success rounded-pill" key={i}>{genre}</span>
                    ))}</td>
                    <td>{item.available_number}</td>
                    <td className="action-holder">
                        <Link to={`/books/show/${i}`}><Eye /></Link>
                        <Link to={`/books/edit/${i}`}><Edit2 /></Link>
                        <form onSubmit={e => handleDelete(e, i)} className="d-inline">
                            <button className="btn btn-sm btn-clean btn-icon btn-hover-danger"><Trash2 /></button>
                        </form>
                    </td>
                </tr>
            ))
        }
        </>
    )
}

const Book = () => {

    return (
        <Table title="Books" columns={cols} hideCreate={false} createLink="/books/create">
            <Tbody />
        </Table>
    )
}

export default Book
