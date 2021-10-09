import { Link } from 'react-router-dom'

import styles from "./navbar.module.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Navbar = () => {
    return (
        <header className={`${styles.header} navbar navbar-light`}>
            <span>Navbar</span>
            <Link to="/" className="btn btn-outline-info float-end">
                Log out
            </Link>
        </header>
    )
}

export default Navbar
