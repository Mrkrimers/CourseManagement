import { useState } from "react"
import Header from "../../components/Header/Header"
import style from '../AdminPage/style.module.scss'

function AdminPage() {
    const [opt, setOpt] = useState('Создание')
    const [inp, setInp] = useState({
        id: null,
        header: '',
        description: '',
        location: ''
    })

    const changeOpt = (e) => {
        setOpt(e.target.textContent)
    }

    const getInpData = (e) => {
        setInp({ ...inp, [e.target.name]: e.target.value })
    }

    const showContent = () => {
        if (opt === 'Создание') {
            return (
                <>
                    <div className={style.inp}>
                        <input
                            onChange={getInpData}
                            name="header"
                            placeholder="Введите название курса" />
                    </div>

                    <div className={style.inp}>
                        <input
                            onChange={getInpData}
                            name="description"
                            placeholder="Введите описание курса" />
                    </div>

                    <div className={style.inp}>
                        <input
                            onChange={getInpData}
                            name="location"
                            placeholder="Введите город" />
                    </div>
                </>
            )
        } else if (opt === 'Обновление') {
            return (
                <>
                    <div className={style.inp}>
                        <input
                            onChange={getInpData}
                            name="header"
                            placeholder="Введите название курса" />
                    </div>

                    <div className={style.inp}>
                        <input
                            onChange={getInpData}
                            name="description"
                            placeholder="Введите описание курса" />
                    </div>

                    <div className={style.inp}>
                        <input
                            onChange={getInpData}
                            name="location"
                            placeholder="Введите город" />
                    </div>

                    <div className={style.inp}>
                        <input
                            onChange={getInpData}
                            name="id"
                            placeholder="Введите ID" />
                    </div>
                </>)
        } else if (opt === 'Удаление') {
            return (
                <>
                    <div className={style.inp}>
                        <input
                            onChange={getInpData}
                            name="id"
                            placeholder="Введите ID" />
                    </div>
                </>)
        }
    }


    return (
        <>
            <Header />

            <div className={style.rest}>
                <h2 onClick={changeOpt}>Создание</h2>
                <h2 onClick={changeOpt}>Обновление</h2>
                <h2 onClick={changeOpt}>Удаление</h2>
            </div>

            {showContent()}

            <div className={style.btn}>
                <button>Применить</button>
            </div>

        </>
    )
}

export default AdminPage