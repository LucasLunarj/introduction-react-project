import styles from './Modal.module.css'
export const Modal = (props) => {
    return (


        < div className={styles.container} >
            <div className={styles.content}>
                <div className={styles.removeBox}>
                    <h1>Excluir comentário</h1>
                    <p>você tem certeza que gostaria de excluir este comentário?</p>
                    <div>
                        <button onClick={props.cancelRemove}>Cancelar</button>
                        <button onClick={props.acceptRemoveInModal}>Sim, excluir</button>
                    </div>
                </div>
            </div>
        </div >
    )
}