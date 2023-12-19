import { Button, Input } from "@mantine/core";
import Header from "../../components/Header/Header";
import style from '../HomePage/style.module.scss';
import { useGetAllCourseQuery } from "../../services/course";

function HomePage() {
    const { data } = useGetAllCourseQuery()

    return (
        <main>
            <Header />

            <div className={style.wrapper}>
                <div className={style.inpSearch}>
                    <Input placeholder="Введите название курса" />
                </div>

                <Button>Поиск</Button>
            </div>

            <div className={style.block} >
                {data?.map((el) => <div className={style.content} key={el.id}>
                    <h3>{el.header}</h3>
                    <p>{el.description}</p>
                    <div className={style.miniWrapper}>
                        <div className={style.img}></div>
                        <p>{el.location}</p>
                    </div>
                </div>)}
            </div>

        </main>
    )
}

export default HomePage;