import { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import style from '../AdminPage/style.module.scss'
import { Button, Input } from "@mantine/core";
import { useCreateCourseMutation, useDeleteCourseMutation, useUpdateCourseMutation } from "../../services/course";

function AdminPage() {
    const [opt, setOpt] = useState('Создание')
    const [inp, setInp] = useState({
        id: Number,
        header: '',
        description: '',
        location: ''
    })
    const [createCourse] = useCreateCourseMutation()
    const [updateCourse] = useUpdateCourseMutation()
    const [deleteCourse] = useDeleteCourseMutation()

    useEffect(() => {
        setInp({})
    }, [opt])

    const changeOpt = (e) => {
        setOpt(e.target.textContent)
    }

    const getInpData = (e) => {
        setInp({ ...inp, [e.target.name]: e.target.value })
    }

    const sendData = async () => {
        if (opt === 'Создание') {
            const data = await createCourse(inp);
            console.log(data);
            window.location.reload()
        } else if (opt === 'Обновление') {
            const data = await updateCourse(inp);
            console.log(data);
            window.location.reload()
        } else if (opt === 'Удаление') {
            const data = await deleteCourse(inp);
            console.log(data);
            window.location.reload()
        }

    }

    const showContent = () => {
        if (opt === 'Создание') {
            return (
                <>
                    <h2>Курс</h2>
                    <div className={style.inp}>
                        <Input
                            onChange={getInpData}
                            name="header"
                            placeholder="Введите название курса"
                        />
                    </div>

                    <h2>Описание</h2>
                    <div className={style.inp}>
                        <Input
                            onChange={getInpData}
                            name="description"
                            placeholder="Введите описание курса"
                        />
                    </div>

                    <h2>Город</h2>
                    <div className={style.inp}>
                        <Input
                            onChange={getInpData}
                            name="location"
                            placeholder="Введите город" />
                    </div>
                </>
            )
        } else if (opt === 'Обновление') {
            return (
                <>
                    <h2>Курс</h2>
                    <div className={style.inp}>
                        <Input
                            onChange={getInpData}
                            name="header"
                            placeholder="Введите название курса" />
                    </div>

                    <h2>Описание</h2>
                    <div className={style.inp}>
                        <Input
                            onChange={getInpData}
                            name="description"
                            placeholder="Введите описание курса" />
                    </div>

                    <h2>Город</h2>
                    <div className={style.inp}>
                        <Input
                            onChange={getInpData}
                            name="location"
                            placeholder="Введите город" />
                    </div>

                    <h2>ID</h2>
                    <div className={style.inp}>
                        <Input
                            onChange={getInpData}
                            name="id"
                            placeholder="Введите ID" />
                    </div>
                </>)
        } else if (opt === 'Удаление') {
            return (
                <>
                    <h2>ID</h2>
                    <div className={style.inp}>
                        <Input
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
                <h2 onClick={changeOpt} className={opt === 'Создание' ? style.active : null}>Создание</h2>
                <h2 onClick={changeOpt} className={opt === 'Обновление' ? style.active : null}>Обновление</h2>
                <h2 onClick={changeOpt} className={opt === 'Удаление' ? style.active : null}>Удаление</h2>
            </div>

            <div className={style.wrapperContent}>
                {showContent()}

                <div className={style.btn}>
                    <Button fullWidth onClick={sendData}>Применить</Button>
                </div>
            </div>

        </>
    )
}

export default AdminPage