import React from 'react'
import styles from '../Navbar/navbar.module.scss';
import { BsSearch } from "react-icons/bs";
const Navbar = () => {
    return (
        <header>
            <nav >
                <div className={styles.navbar}>
                    <div className="left_site">
                        <h2 className={styles.logo}>ADITU</h2>
                    </div>
                    <div className={styles.right_site}>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact Me</li>
                            <li>Style Guide</li>
                            <BsSearch />
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    
    )
}

export default Navbar