import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import Show from '../../layouts/crud-layouts/show'
import { SupplierModel } from "./utils/interface"

const ShowSupplier = () => {
    const [supplier, setSupplier] = useState<SupplierModel>({
        name: '',
        contact: 0,
        address: '',
        _id: '',
        numberOfBooksProvided: 0,
    })
    const params: {id: string} = useParams()
    const id = params.id

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/suppliers/${id}`)
            .then((res: {
                data: {
                    supplier: SupplierModel
                }
            }) => {
                setSupplier(res.data.supplier)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Show title="Supplier Detail" id={params.id} route="Suppliers">
            <div className="row">
                <div className="col-md-6">
                    <span className="fw-bold">Supplier Name: </span> {supplier.name}
                </div>
                <div className="col-md-6">
                    <span className="fw-bold">Supplier Address: </span> {supplier.address}
                </div>
                <div className="col-md-6 mt-4">
                    <span className="fw-bold">Supplier Contact: </span> 
                    {
                        supplier.contact
                    }
                </div>
                <div className="col-md-6 mt-4">
                    <span className="fw-bold">Number of books provided: </span> {supplier.numberOfBooksProvided}
                </div>
            </div>
        </Show>
    )
}

export default ShowSupplier
