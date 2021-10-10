import { Route } from 'react-router'

import Book from './book'
import CreateBook from './create-book'
import EditBook from './edit-book'
import ShowBook from './show-book'

const BookIndex = () => {
    return (
        <>
            <Route exact path="/books">
                <Book />
            </Route>
            <Route path="/books/create">
                <CreateBook />
            </Route>
            <Route path="/books/edit/:id">
                <EditBook />
            </Route>
            <Route path="/books/show/:id">
                <ShowBook />
            </Route>
        </>
    )
}

export default BookIndex
