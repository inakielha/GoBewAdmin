import React from 'react'
import styles from '../styles/nav.module.css'
import Logo from '../../images/Logo-GoBew.png'

export default function Nav() {
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
