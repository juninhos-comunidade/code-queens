'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import { MenuIcon, X } from 'lucide-react';
import StackCheckLogo from '../../../../public/stackcheck_logo.svg';

import { Button } from '@/components';

import styles from './navbar.module.scss'

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const handleToggleNavbar = () => setIsOpen(!isOpen)
    const visibleIcon = isOpen ? <X /> : <MenuIcon />



    useEffect(() => {
        const menu = document.getElementById('navbar_container');
        document.addEventListener('pointerdown', () => {
            const target = event?.target as Node;
            isOpen && !menu?.contains(target) && setIsOpen(false)
        })
      
    });
    return (
        <nav className={styles.navbar}>
            <Image src={StackCheckLogo} alt='Stack Check' />

            <ul
                id='navbar_container'
                onClick={() => setIsOpen(false)}
                className={`${styles.navbar_container} ${isOpen && styles.navbar_open}`}>
                <li><a href='/'>Home</a></li>

            </ul>

            <div className={styles.buttons_container}>
                <button onClick={handleToggleNavbar}>{visibleIcon}</button>
                <Button text='Login' variant='secondary' minSize={true} className={styles.loginButton} />
            </div>
        </nav>
    )
}