import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'

import Edit from '../../layouts/crud-layouts/edit'
import { SupplierModel } from "./utils/interface"

const EditSupplier = () => {
    const [supplier, setSupplier] = useState<SupplierModel>({
        name: '',
        address: '',
        contact: 0,
        _id: '',
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
                console.log(res.data.supplier);
                setSupplier(res.data.supplier)
            })
    }, [])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = event.target.name
        const value = event.target.value

        setSupplier({...supplier, [name]: value})
    }

    const submitForm = (event: React.FormEvent) => {
        event.preventDefault()

        axios.patch(`http://localhost:5000/api/v1/suppliers/${id}`, supplier)
            .then(res => console.log(res.data))

        window.location.href = '/suppliers'
    }

    return (
        <Edit title="Edit supplier">
            <form id="form" onSubmit={submitForm}>
                <div className="form-group row">
                    <div className="col-md-6">
                        <label htmlFor="">Supplier Name: *</label>
                        <input required type="text" className="form-control"
                            name="name" 
                            value={supplier.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="">Supplier Contact: *</label>
                        <input required type="number" className="form-control"
                            name="contact"
                            value={supplier.contact}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">Supplier Address: *</label>
                        <input required type="text" className="form-control"
                            name="address" 
                            value={supplier.address}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </form>
        </Edit>
    )
}

export default EditSupplier
