'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { MenuIcon, X } from 'lucide-react';
import StackCheckLogo from '../../../../public/stackcheck_logo.svg';

import { Button, Limit } from '@/components';

import styles from './navbar.module.scss'
import Link from 'next/link';

export const Navbar = () => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [token, setToken] = useState<string>()
    const handleToggleNavbar = () => setIsOpen(!isOpen)
    const visibleIcon = isOpen ? <X /> : <MenuIcon />



    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            const menu = document.getElementById('navbar_container');

            if (isOpen && menu && !menu.contains(target)) return setIsOpen(false);
        };

        document.addEventListener('pointerdown', handleClickOutside);

        return () => {
            document.removeEventListener('pointerdown', handleClickOutside);
        };
    }, [isOpen]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        token && setToken(token)
    }, [router]);


    return (
        <nav className={styles.navbar}>
            <Limit>
                <Link href={'/'}>
                    <Image src={StackCheckLogo} alt='Stack Check' />
                </Link>

                <ul
                    id='navbar_container'
                    onClick={() => setIsOpen(false)}
                    className={`${styles.navbar_container} ${isOpen && styles.navbar_open}`}>
                    <li><Link href='/'>Inicio</Link></li>
                    {
                        token ?
                            <>
                                <li><Link href='/dashboard'>Dashboard</Link></li>
                                <li><Link href='/logout'>Logout</Link></li>
                            </> :
                            <>
                                <li><Link href='/sign-in'>Login</Link></li>
                                <li><Link href='/sign-up'>Cadastro</Link></li>
                            </>
                    }

                </ul>

                <div className={styles.buttons_container}>
                    <button className={styles.nav_toggle} onClick={handleToggleNavbar}>{visibleIcon}</button>
                   {
                   token ?
                   <Button onClick={() => router.push('/sign-in')} text='Login' variant='secondary' minSize={true} className={styles.loginButton} />
                :  <Button onClick={() => {}} text='Logout' variant='secondary' minSize={true} className={styles.loginButton} />
                }
                </div>
            </Limit>
        </nav>
    )
}