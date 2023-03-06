import Navbar from '../components/navbar/navbar'
import Sidebar from '../components/sidebar/sidebar'

import styles from '../App.module.css'

interface MasterLayoutProps {
    children: JSX.Element;
}

const MasterLayout = ({ children }: MasterLayoutProps) => {
  return (
    <div className={styles.wrapper}>
    <Sidebar />
    <div className={styles.main}>
        <Navbar />
        {children}
    </div>
    </div>
  )
}

export default MasterLayout