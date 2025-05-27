import { IPopupContentList } from './type'
import styles from './index.module.scss'
import { useEffect, useState } from 'react'

import { PopupContentURL } from '../popupContentURL'

export const PopupContentList: React.FC<IPopupContentList> = ({ onListChange }) => {
    const [items, setItems] = useState<React.ReactNode[]>([])

    useEffect(() => {
        if(onListChange) {
            onListChange(items)
        }
    }, [items, onListChange])

    const handleAddClick = () => {
        if (items.length < 10) {
            setItems([...items, <PopupContentURL inputName={`Ссылка ${items.length + 1}`} url='' readOnly={false} key={items.length} />])
        }
    }

    return (
        <div className={styles.popup__content_list}>
            <div className={styles.popup__content_list_container}>
                {items}
            </div>
            <button onClick={handleAddClick} className={styles.popup__content_list_button}>
                <img src='src/entities/aboutService/data/iconAdd.svg' alt='Добавить' className={styles.popup__content_list_button_image}></img>
                <p className={styles.popup__content_list_button_text}>
                    Добавить ссылку
                    <span className={styles.popup__content_list_button_amount}> (доступно {10 - items.length} из 10)</span>
                </p>
            </button>
        </div>
    )
}