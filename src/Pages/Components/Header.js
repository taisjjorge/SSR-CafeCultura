import styles from './Header.module.css'

//import Logo from '../img/logo.png'

export default function Header() {
    return (
        <>
            <div className={styles.headerinfo}>
                <p>aberto de 08h às 18h - seg à sáb - rua são joão - 
                    Carioca</p>
            </div>
            <a className={styles.headerlogo} href="index.html">
                <img src={'#'} alt="Café&Cultura" />
            </a>
            <nav className={styles.headermenu}>
                <ul>
                    <li><a href="#">cafés</a></li>
                    <li><a href="#">cappuccinos</a></li>
                    <li><a href="#">chás</a></li>
                    <li><a href="#">frappuccinos</a></li>
                </ul>
            </nav>
        </>
    )
}