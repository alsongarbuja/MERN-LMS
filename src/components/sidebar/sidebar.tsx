import { Link, useLocation } from 'react-router-dom'
import styles from './sidebar.module.css'
import { BookOpen, User, DollarSign, Archive, Truck } from 'react-feather'

const Sidebar = () => {
    const { pathname } = useLocation() 

    console.log(pathname);
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logoHolder}>
                <span className={styles.logo}>LMS</span>
            </div>
            <div className={styles.sidebarMenu}>
                <ul className={styles.sidebarList}>
                    <Link to="/borrows">
                        <li className={`${styles.sidebarItem} ${pathname==='/borrows'?styles.activeMenu:''}`}>
                            <span>
                                <Archive />
                            </span>
                            Borrows
                        </li>
                    </Link>
                    <Link to="/fines">
                        <li className={`${styles.sidebarItem} ${pathname==='/fines'?styles.activeMenu:''}`}>
                            <span>
                                <DollarSign />
                            </span>
                            Fines
                        </li>
                    </Link>
                    <Link to="/books">
                        <li className={`${styles.sidebarItem} ${pathname==='/books'?styles.activeMenu:''}`}>
                            <span>
                            <BookOpen />
                            </span>
                            Books
                        </li>
                    </Link>
                    <Link to="/users">
                        <li className={`${styles.sidebarItem} ${pathname==='/users'?styles.activeMenu:''}`}>
                            <span>
                                <User />
                            </span>
                            Users
                        </li>
                    </Link>
                    <Link to="/suppliers">
                        <li className={`${styles.sidebarItem} ${pathname==='/suppliers'?styles.activeMenu:''}`}>
                            <span>
                                <Truck />
                            </span>
                            Suppliers
                        </li>
                    </Link>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar
