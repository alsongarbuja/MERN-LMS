import { useHistory } from 'react-router'

const Create = (
    {title, children}: 
    {title: string, children: any}
) => {
    const history = useHistory()

    return (
        <article className="card">
            <div className="card-header p-3 clearfix">
                <h4 className="float-start">{title}</h4>
            </div>
            <div className="card-body">
                {children}
            </div>
            <div className="card-footer">
                <button type="submit" form="form" className="btn btn-outline-primary">Submit</button>
                <button className="btn btn-dark float-end" onClick={history.goBack}>Cancel</button>
            </div>
        </article>
    )
}

export default Create
