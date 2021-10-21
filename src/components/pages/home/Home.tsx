import { Link } from 'react-router-dom'
import styles from './home.module.css'

const Home = () => {
    return (
        <div className={styles.container}>
            <h1>Find Everything, Right Here</h1>
            <div className="buttons">
                <Link to="/register" className="btn btn-light mx-2">
                    Sign Up
                </Link>
                <Link to="/login" className="btn btn-primary">
                    Log in
                </Link>
            </div>
        </div>
    )
}

export default Home
