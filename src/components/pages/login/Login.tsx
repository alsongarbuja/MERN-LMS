import { ArrowLeft } from 'react-feather'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="container">
            <div className="card w-25 p-4 bg-light">
                <h4>Log In</h4>
                <hr />
                <form className="form">
                    <div className="form-group row">
                        <div className="col-12">
                            <label htmlFor="">Email:</label>
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="col-12 mt-2">
                            <label htmlFor="">Password:</label>
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="col-12 mt-4">
                            <input type="submit" className="btn btn-success w-100" value="Log In" />
                        </div>
                        <div className="col-12 mt-3">
                            <span>New Here? <Link to="/register">Make an account</Link></span>
                            <br />
                            <span><Link to="/">Forgot Password?</Link></span>
                        </div>
                    </div>
                </form>
                <div className="mt-4">
                    <Link to="/" className="btn btn-dark"><ArrowLeft /> Back</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
