import Image from 'next/image';

import { MenuIcon } from 'lucide-react';
import StackCheckLogo from '../../../../public/stackcheck_logo.svg';

import styles from './navbar.module.scss'

export const Navbar = () => {
    return(
        <nav className={styles.navbar}>
            <Image src={StackCheckLogo} alt='Stack Check'/>

            <ul className={styles.navbar_container}>
                <li><a href=''>Item</a></li>
            </ul>

            <button> <MenuIcon/></button>
            <button>Login</button>
            {/* <Button text='Login' /> */}
        </nav>
    )
}