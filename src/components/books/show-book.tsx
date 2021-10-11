import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import Show from '../../layouts/crud-layouts/show'
import { SupplierModel } from '../suppliers/utils/interface'
import { BookModel } from "./utils/interfaces"

const ShowBook = () => {
    const [book, setBook] = useState<BookModel>({
        name: '',
        author: '',
        availableNumber: 0,
        genres: [''],
        _id: '',
        description: '',
        supplierId: '',
    })
    const [supplier, setSupplier] = useState<SupplierModel>({
        _id: '',
        address: '',
        contact: 0,
        name: '',
        numberOfBooksProvided: 0,
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

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/suppliers/${book.supplierId}`)
            .then((res: {
                data: {
                    supplier: SupplierModel
                }
            }) => setSupplier(res.data.supplier))
    }, [book])

    return (
        <Show title="Book Detail" id={params.id} route="books">
            <div className="row">
                <div className="col-md-6">
                    <span className="fw-bold">Book: </span> {book.name}
                </div>
                <div className="col-md-6">
                    <span className="fw-bold">Author: </span> {book.author}
                </div>
                <div className="col-md-6 mt-4">
                    <span className="fw-bold">Genres: </span> 
                    {
                        book.genres?.map((genre, i) => (
                            <span className="badge bg-success rounded-pill mx-1" key={i}>{genre}</span>
                        ))
                    }
                </div>
                <div className="col-md-6 mt-4">
                    <span className="fw-bold">Available Number: </span> {book.availableNumber}
                </div>
                <div className="col-md-6 mt-4">
                    <span className="fw-bold">Supplier: </span> {supplier?.name}
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <span className="fw-bold">Description: </span><br />
                    <hr />
                    {
                        book.description
                    }
                </div>
            </div>
        </Show>
    )
}

export default ShowBook
