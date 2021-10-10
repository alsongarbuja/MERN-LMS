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
        _id: ''
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
    }, [])

    return (
        <Show title="Supplier Detail" id={params.id} route="Suppliers">
            <div className="row">
                <div className="col-md-6">
                    <span className="font-bold">Supplier Name: </span> {supplier.name}
                </div>
                <div className="col-md-6">
                    <span className="font-bold">Supplier Address: </span> {supplier.address}
                </div>
                <div className="col-md-6 mt-4">
                    <span className="font-bold">Supplier Contact: </span> 
                    {
                        supplier.contact
                    }
                </div>
            </div>
        </Show>
    )
}

export default ShowSupplier
