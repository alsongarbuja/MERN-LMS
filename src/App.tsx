import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import styles from './App.module.css'

import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';

import Borrow from './components/borrows/borrow';
import BookIndex from './components/books';
import SupplierIndex from './components/suppliers';
import Home from './components/pages/home/Home';
import Register from './components/pages/register/Register';
import Login from './components/pages/login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
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
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
