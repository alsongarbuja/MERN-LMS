import { Route } from 'react-router'

import CreateSupplier from './create-supplier'
import EditSupplier from './edit-supplier'
import ShowSupplier from './show-supplier'

import Supplier from './supplier'

const SupplierIndex = () => {
    return (
        <>
            <Route exact path="/suppliers">
                <Supplier />
            </Route>
            <Route path="/suppliers/create">
                <CreateSupplier />
            </Route>
            <Route path="/suppliers/edit/:id">
                <EditSupplier />
            </Route>
            <Route path="/suppliers/show/:id">
                <ShowSupplier />
            </Route>
        </>
    )
}

export default SupplierIndex
