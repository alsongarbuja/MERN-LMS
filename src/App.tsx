import { BrowserRouter as Router, Route } from 'react-router-dom'

import styles from './App.module.css'

import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';

import Book from './components/books/book';
import BookCreate from './components/books/create-book';
import BookEdit from './components/books/edit-book';
import BookShow from './components/books/show-book';
import Borrow from './components/borrows/borrow';

function App() {
  return (
    <Router>
      <div className={styles.wrapper}>
        <Sidebar />
        <div className={styles.main}>
          <Navbar />
          <Route path="/borrows">
              <Borrow />
          </Route>
          <Route path="/fines">
            {/* <Fines /> */}
          </Route>
          <Route exact path="/books">
            <Book />
          </Route>
          <Route path="/books/create">
            <BookCreate />
          </Route>
          <Route path="/books/edit/:id">
            <BookEdit />
          </Route>
          <Route path="/books/show/:id">
            <BookShow />
          </Route>
          <Route path="/users">
            {/* <User /> */}
          </Route>
          <Route path="/suppliers">
            {/* <Suppliers /> */}
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
