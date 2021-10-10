import axios from 'axios'
import React, { useState } from 'react'
import Create from '../../layouts/crud-layouts/create'

const CreateSupplier = () => {
    const [supplier, setSupplier] = useState({
        name: '',
        contact: '',
        address: '',
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = event.target.name
        const value = event.target.value

        setSupplier({...supplier, [name]: value})
    }

    const submitForm = (event: React.FormEvent) => {
        event.preventDefault()

        axios.post('http://localhost:5000/api/v1/suppliers', supplier)
            .then(res => console.log(res.data))

        window.location.href = '/suppliers'
    }

    return (
        <Create title="Create Supplier">
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
        </Create>
    )
}

export default CreateSupplier
