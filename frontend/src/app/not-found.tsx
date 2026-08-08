import Image from 'next/image';

import notFoundIcon from '../../public/not-found-icon.svg';

import { Button, Footer, Navbar } from "@/components";

import styles from './not-found.module.scss';
const NotFound = () => {
return(
    <div className={styles.page_not_found}>
    <Navbar/>
    <main className={styles.main}>
        <Image src={notFoundIcon} alt='pagina não encontrada'/>
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <p>A página que você está procurando não existe, foi removida ou teve seu endereço alterado temporariamente.</p>
        <Button text="Voltar para o início"/>
    </main>
    <Footer/>
    </div>
)
}

export default NotFound;