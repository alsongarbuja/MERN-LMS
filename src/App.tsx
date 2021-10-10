import { BrowserRouter as Router, Route } from 'react-router-dom'

import styles from './App.module.css'

import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';

import Borrow from './components/borrows/borrow';
import BookIndex from './components/books';
import SupplierIndex from './components/suppliers';

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
          <BookIndex />
          <Route path="/users">
            {/* <User /> */}
          </Route>
          <SupplierIndex />
        </div>
      </div>
    </Router>
  );
}

export default App;
