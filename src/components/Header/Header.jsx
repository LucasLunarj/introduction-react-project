import styles from './Header.module.css'
//Images
import ignite from '../../assets/ignite simbol.png'

export const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={ignite} alt="" />
                <h1>Ignite Feed</h1>
            </div>
        </div>
    )
}