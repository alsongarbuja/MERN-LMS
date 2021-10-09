import React from 'react'
import { useParams } from 'react-router'
import Show from '../../layouts/crud-layouts/show'

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


const ShowBook = () => {
    const params: {id: string} = useParams()
    const id = parseInt(params.id)

    return (
        <Show title="Book Detail" id={params.id} route="books">
            <div className="row">
                <div className="col-md-6">
                    <span className="font-bold">Book: </span> {data[id].name}
                </div>
                <div className="col-md-6">
                    <span className="font-bold">Author: </span> {data[id].author}
                </div>
                <div className="col-md-6 mt-4">
                    <span className="font-bold">Genres: </span> 
                    {
                        data[id].genre.map((genre, i) => (
                            <span className="badge bg-success rounded-pill" key={i}>{genre}</span>
                        ))
                    }
                </div>
                <div className="col-md-6 mt-4">
                    <span className="font-bold">Available Number: </span> {data[id].available_number}
                </div>
            </div>
        </Show>
    )
}

export default ShowBook
