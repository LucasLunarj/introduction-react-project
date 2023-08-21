//Hook
import { useState } from 'react'
import { Feedback } from '../Feedback/Feedback'

//Styles
import styles from './Post.module.css'
import { Modal } from '../Modal/Modal'

export const Post = (props) => {
    const [getData, setGetData] = useState('')
    const [postContent, setPostContent] = useState([])
    const [switchButton, setSwitchButton] = useState(true)
    const [getID, setGetId] = useState('')

    function handleGetData(e) {
        setGetData((e.target.value))
    }
    console.log(getData)

    function handleClick() {
        setPostContent([...postContent, { message: getData, id: postContent.length + 1 }])
        setGetData('')
    }

    const handleSwitch = (id) => {
        switchButton === true ? setSwitchButton(false) : setSwitchButton(true);
        console.log(id)
        setGetId(id)
    }

    const switchCheck = switchButton === false ? < Modal /> : null

    const handleAcceptRemove = () => {
        setPostContent(postContent.filter((item) => getID !== item.id))

        setSwitchButton(true)

    }

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
                            {postContent.map((item, index) => {
                                return <div key={item.lenght}> <Feedback
                                    key={index}
                                    content={item.message}
                                    switch={() => handleSwitch(item.id)}
                                    switchData={switchCheck}
                                    removeItem={() => handleAcceptRemove(item.id, item.message)}
                                />
                                </div>

                            })}
                        </ul>
                    </div>
                </div>

            </div>
        </div >

    )
}