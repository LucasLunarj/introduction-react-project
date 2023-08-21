import styles from './Modal.module.css'
export const Modal = (props) => {
    return (


        < div className={styles.container} >
            <div className={styles.content}>
                <div className={styles.removeBox}>
                    <h1>Excluir comentário</h1>
                    <p>você tem certeza que gostaria de excluir este comentário?</p>
                    <div className={styles.buttonBox}>
                        <button className={styles.cancelRemove} onClick={props.cancelRemove}>Cancelar</button>
                        <button className={styles.acceptRemove} onClick={props.acceptRemove}>Sim, excluir</button>
                    </div>
                </div>
            </div>
        </div >
    )
}