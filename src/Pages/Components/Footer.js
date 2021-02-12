import styles from './Footer.module.css'

export default function Footer() {
    return(
        <footer className={styles.footer}> 
            <p>Rua São João, RJ</p>
            <p>&copy; Copyright 2021, Café&Cultura</p>
        </footer>
    )
}