import React, { useEffect } from 'react'
import styles from '../styles/nav.module.css'
import Logo from '../../images/Logo-GoBew.png'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { USER_LOGOUT } from '../../redux/actions'

export default function Nav() {
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
      (location.pathname !== '/login')
        && localStorage.setItem('lastPath', location.pathname)
    }, [location])
    

    const handleLogout = () => {
        dispatch(USER_LOGOUT());
    }
    return (
        <nav>
            <div className={styles.navContaner}>
                <div className={styles.navWidth}>
                    <div className={styles.navLogoContainer}>
                        <img className={styles.navLogo} src={Logo} alt='img not found' />
                        <span  className={styles.navLink}><Link  className={styles.navLink} to='/'>Productos</Link></span>
                        <span  className={styles.navLink}><Link  className={styles.navLink} to='/'>Usuarios</Link></span>
                        <span  className={styles.navLink}><Link  className={styles.navLink} to='/faq'>FAQ</Link></span>
                        <button  className={styles.btnNav} onClick={ handleLogout }>Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
