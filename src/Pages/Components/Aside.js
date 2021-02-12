
import styles from './Aside.module.css'

export default function Aside() {
    return( 
            <div className={styles.container}>
                <nav className={styles.filtro}>
                    <h2>Preço</h2>
                    <ul>
                        <li> $</li>
                        <li> $$</li>
                        <li> $$$</li>
                    </ul>
                    <h2>Intensidade</h2>
                    <ul className={styles.sabor}>
                        <li><span className={styles.sabor3}>Marrom</span></li>
                        <li><span className={styles.sabor4}>Laranja</span></li>
                        <li><span className={styles.sabor5}>Amarelo</span></li>
                    </ul>
                    <h2>Tempo de preparo</h2>
                    <ul>
                        <li> 15min +</li>
                        <li> 25min +</li>
                        <li>35min +</li>
                    </ul>
                </nav>
            </div>
        
    )
}