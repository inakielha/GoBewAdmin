import React, { useEffect } from 'react'
import styles from '../styles/nav.module.css'
import Logo from '../../images/Logo-GoBew.png'
import { useLocation } from 'react-router-dom'

export default function Nav() {
    
    const location = useLocation();
    useEffect(() => {
      (location.pathname !== '/login')
        && localStorage.setItem('lastPath', location.pathname)
    }, [location])
    
    return (
        <nav>
            <div className={styles.navContaner}>
                <div className={styles.navWidth}>
                    <div className={styles.navLogoContainer}>
                        <img className={styles.navLogo} src={Logo} alt='img not found' />
                    </div>
                </div>
            </div>
        </nav>
    )
}
