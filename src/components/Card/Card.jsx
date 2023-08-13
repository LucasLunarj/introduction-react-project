import styles from './Card.module.css'
//Images
import banner from '../../assets/banner.png'
import profile from '../../assets/profile.jpg'
import frame from '../../assets/frame.svg'

export const Card = () => {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.bannerContent}>
                    <img src={banner} alt="Banner Photo" />
                    <img className={styles.profilePicture}
                        src={profile}
                        alt="Profile Picture" />

                </div>
                <div className={styles.content}>
                    <div>
                        <h1>Lucas Luna</h1>
                        <p>Developer</p>
                    </div>
                    <div className={styles.divider}>

                    </div>
                    <button>
                        <img src={frame} alt="" />
                        <p>Editar Seu Perfil</p>
                    </button>
                </div>
            </div>
        </div>
    )
} 