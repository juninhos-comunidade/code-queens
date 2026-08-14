import { Footer, Navbar } from '@/components';
import styles from './layout.module.scss'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
