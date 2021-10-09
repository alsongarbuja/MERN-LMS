import { Edit3 } from "react-feather"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"

const Show = (
    {title, children, route, id}:
    {title: string, children: any, route: string, id: string}
) => {
    const history = useHistory()

    return (
        <article className="card">
            <div className="card-header clearfix">
                <h4 className="float-start">{title}</h4>
                <Link to={`/${route}/edit/${id}`} className="btn btn-outline-primary float-end">
                    <Edit3 /> Edit
                </Link>
            </div>
            <div className="card-body">
                {children}
            </div>
            <div className="card-footer">
                <button className="btn btn-dark float-end" onClick={history.goBack}>Go back</button>
            </div>
        </article>
    )
}

export default Show
