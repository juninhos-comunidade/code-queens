import styles from './footer.module.scss'
import { GitBranch, Camera, Balloon } from 'lucide-react'

import { getYear } from '@/utils'

type TLinks = {
    title: string,
    url: string
}

type TLinksFooter = {
    title: string,
    links: TLinks[],
}

interface FooterProps {
    linksFooter : TLinksFooter[]
}

export const Footer = ({linksFooter} : FooterProps) => {

    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>

                <div className={styles.nav_icons}>
                    <GitBranch />
                    <Camera />
                    <Balloon />
                </div>

                
                {
                    linksFooter &&
                    linksFooter.map((link, index) =>
                        <div className={styles.nav_footer} key={index}>
                            <div className={styles.nav_items_container}>
                                <h6 className={styles.link_title}>{link.title}</h6>
                                {link.links.map((link) =>
                                    <a key={link.url} href={link.url}>{link.title}</a>
                                )}

                            </div>
                        </div>
                    )
                }
            </div>


            <span className={styles.copyrights}>
                StackCheck &copy; {getYear} - Todos os direitos  reservados
            </span>
        </footer>
    )
}