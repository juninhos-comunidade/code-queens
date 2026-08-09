
import { getYear } from '@/utils'
import { Limit } from '@/components/ui'
import { ReactNode } from 'react'

import styles from './footer.module.scss'

type TLinks = {
    title: string,
    url: string
}

type TLinksFooter = {
    title: string,
    links: TLinks[],
}

interface FooterProps {
    linksFooter: TLinksFooter[],
    icons?: ReactNode
}

export const Footer = ({ linksFooter, icons }: FooterProps) => {

    return (
        <footer className={styles.footer}>
            <Limit>

                <div className={styles.footer_content}>

                    <div className={styles.nav_icons}>
                    {icons}
                    </div>
                    {
                        linksFooter &&
                        linksFooter.map((link, index) =>
                            <div className={styles.nav_footer} key={index}>
                                <div className={styles.nav_items_container}>
                                    <h6 className={styles.link_title}>{link.title}</h6>
                                    {link.links.map((link,index) =>
                                        <a key={index} href={link.url}>{link.title}</a>
                                    )}

                                </div>
                            </div>
                        )
                    }
                </div>

                <span className={styles.copyrights}>
                    StackCheck &copy; {getYear} - Todos os direitos reservados.
                </span>
            </Limit>
        </footer>
    )
}