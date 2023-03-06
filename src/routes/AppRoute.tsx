import { BrowserRouter, Routes, Route } from "react-router-dom"
import BookIndex from "../components/books"
import Borrow from "../components/borrows/borrow"
import SupplierIndex from "../components/suppliers"
import MasterLayout from "../layouts/MasterLayout"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"

const AppRoute = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/app/*" element={<ProtectedRoutes />} />
        </Routes>
    </BrowserRouter>
  )
}

const ProtectedRoutes = () => {
    return (
        <MasterLayout>
            <Routes>
                <Route path="borrows" element={<Borrow />} />
                <Route path="books" element={<BookIndex />} />
                {/* <Route path="users" element={<User />} /> */}
                <Route path="suppliers" element={<SupplierIndex />} />
            </Routes>
        </MasterLayout>
    )
}

export default AppRoute