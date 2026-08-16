import {redirect} from 'next/navigation';
import { cookies } from 'next/headers'

import { Footer, Navbar } from '@/components';
import styles from './layout.module.scss'

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const getSession = async () => {
    const cookieStore = await cookies()
    const session = cookieStore.get('teste')
    return session
  }
  const session = await getSession()
  // if(!session) redirect('/sign-in');

  return (
    <div className={styles.auth}>
     <Navbar/>
      <main className={styles.main}>
        {children}
      </main>
      <Footer/>
    </div>
  );
}
