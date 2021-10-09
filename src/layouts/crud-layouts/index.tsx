import { Plus } from "react-feather"
import { Link } from "react-router-dom"

const Table = (
    { title, columns, children, hideCreate, createLink='/' }: 
    {title: string, columns: string[], children: any, hideCreate: boolean, createLink: string }
) => {
    return (
        <article className="card">
            <div className="card-header p-3 clearfix">
                <h4 className="float-start">{title}</h4>
                {
                    hideCreate || (
                        <Link to={`${createLink}`} className="btn btn-outline-primary float-end">
                            <Plus /> Add {title}
                        </Link>
                    )
                }
            </div>
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            {
                                columns.map((col, i) => <th key={i}>{col}</th>)
                            }
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {children}
                    </tbody>
                </table>
            </div>
        </article>
    )
}
export default Table
