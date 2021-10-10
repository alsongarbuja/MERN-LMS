import axios from 'axios'
import { FormEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Edit2, Eye, Trash2 } from "react-feather"

import Table from '../../layouts/crud-layouts'
import { SupplierModel } from './utils/interface'

const cols = ["Name", "Contact", "Address"]

const Supplier = () => {
    const [supplier, setSupplier] = useState<SupplierModel[]>([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/suppliers')
            .then((res: {
                data: {
                    suppliers: SupplierModel[]
                }
            }) => {
                setSupplier(res.data.suppliers)
            })
    }, [])

    const handleDelete = (e: FormEvent, id: string) => {
        e.preventDefault()

        if(window.confirm('Are you sure you want to delete the supplier?')){
            axios.delete(`http://localhost:5000/api/v1/suppliers/${id}`)
                .then(res => console.log(res.data))

            window.location.reload()
        }
    }

    return (
        <Table title="Suppliers" hideCreate={false} createLink="/suppliers/create" columns={cols}>
            {
                supplier.length > 0 ? supplier.map(sup => (
                    <tr key={sup._id}>
                        <td>{sup.name}</td>
                        <td>{sup.contact}</td>
                        <td>{sup.address}</td>
                        <td className="action-holder">
                            <Link to={`/suppliers/show/${sup._id}`}><Eye /></Link>
                            <Link to={`/suppliers/edit/${sup._id}`}><Edit2 /></Link>
                            <form onSubmit={e => handleDelete(e, sup._id)} className="d-inline">
                                <button className="btn btn-sm btn-clean btn-icon btn-hover-danger"><Trash2 /></button>
                            </form>
                        </td>
                    </tr>
                )) : (
                    <tr>
                        <td colSpan={4} className="text-center">No data found</td>
                    </tr>
                )
            }
        </Table>
    )
}

export default Supplier
