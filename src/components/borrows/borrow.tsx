import { Edit2, Eye, Trash2 } from 'react-feather'
import { Link } from 'react-router-dom'
import Table from '../../layouts/crud-layouts/index'

const cols = ["Borrower", "Book Borrowed", "Borrowed Date", "Return Date"]
const data = [
    {
        borrower_name: "user 1",
        book_name: "book 1",
        borrowed_date: new Date("2020-01-23"),
        return_date: new Date("2020-03-23"),
    },
    {
        borrower_name: "user 2",
        book_name: "book 2",
        borrowed_date: new Date("2020-01-25"),
        return_date: new Date("2020-03-25"),
    },
    {
        borrower_name: "user 3",
        book_name: "book 3",
        borrowed_date: new Date("2020-02-13"),
        return_date: new Date("2020-04-13"),
    },
]

const Tbody = () => {
    return (
        <>
        {
            data.map((item, i) => (
                <tr key={i}>
                    <td>{item.borrower_name}</td>
                    <td>{item.book_name}</td>
                    <td>{JSON.stringify(item.borrowed_date).substring(1,10)}</td>
                    <td>{JSON.stringify(item.return_date).substring(1,10)}</td>
                    <td className="action-holder">
                        <Link to=""><Eye /></Link>
                        <Link to=""><Edit2 /></Link>
                        <Link to=""><Trash2 /></Link>
                    </td>
                </tr>
            ))
        }
        </>
    )
}

const Borrow = () => {
    return (
        <div>
            <Table title="Borrows" columns={cols} hideCreate={true} createLink="">
                <Tbody />
            </Table>
        </div>
    )
}

export default Borrow
