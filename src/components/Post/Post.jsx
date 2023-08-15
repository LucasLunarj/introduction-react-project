//Hook
import { useState } from 'react'

import { Modal } from '../Modal/Modal'
import { Feedback } from '../Feedback/Feedback'

//Styles
import styles from './Post.module.css'

export const Post = (props) => {
    const [getData, setGetData] = useState('')
    const [postContent, setPostContent] = useState([])
    const [switchButton, setSwitchButton] = useState(true)

    function handleGetData(e) {
        setGetData((e.target.value))
    }
    console.log(getData)
    console.log(postContent.length)
    function handleClick() {
        setPostContent([...postContent, { message: getData }])
        setGetData('')
    }

    const handleSwitch = () => switchButton === true ? setSwitchButton(false) : setSwitchButton(true);

    const handleRemove = () => setSwitchButton(true)
    console.log(switchButton)



    return (
        <div className={styles.container}>
            <div className={styles.content}>

                <div className={styles.post}>
                    <div className={styles.postTitle}>
                        <img className={styles.profilePicture}
                            src={props.profilePicture} alt="" />
                        <div>
                            <h2>{props.name}</h2>
                            <p>Dev Front End</p>

                        </div>
                    </div>

                    <p>Públicado há 1h</p>
                </div>
                <div className={styles.postArea}>
                    <p>{props.postContent}</p>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.textArea}>
                    <h3>Deixe seu feedback</h3>
                    <input type="text"
                        placeholder='Escreva um comentário'
                        value={getData}
                        onChange={handleGetData}
                        autoComplete='off'
                    />
                    <button disabled={getData.length === 0} onClick={handleClick}>
                        Publicar
                    </button>
                    <div>
                        <ul >
                            {postContent.map((item) => {
                                return <div key={item.lenght}> <Feedback
                                    key={item.lenght}
                                    content={item.message}
                                    switch={handleSwitch}
                                    id={item}

                                />
                                </div>

                            })}
                        </ul>
                    </div>
                </div>
                <div>
                    {switchButton === false ? <Modal remove={handleRemove} /> : null}
                </div>
            </div>
        </div >

    )
}