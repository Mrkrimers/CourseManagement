import { Button, Input } from "@mantine/core";
import Header from "../../components/Header/Header";
import style from '../HomePage/style.module.scss';
import { useGetAllCourseQuery } from "../../services/course";

function HomePage() {

    const { data } = useGetAllCourseQuery()

    // const coursesArr = [
    //     {
    //         id: 1,
    //         header: 'C# Course',
    //         description: 'В течение курса студенты ознакомятся с ...',
    //         location: 'Минск',
    //     },
    //     {
    //         id: 2,
    //         header: 'JavaScript Course',
    //         description: 'В течение курса студенты ознакомятся с ...',
    //         location: 'Минск',
    //     },
    //     {
    //         id: 3,
    //         header: 'C# Course',
    //         description: 'В течение курса студенты ознакомятся с ...',
    //         location: 'Минск',
    //     },
    //     {
    //         id: 4,
    //         header: 'JavaScript Course',
    //         description: 'В течение курса студенты ознакомятся с ...',
    //         location: 'Минск',
    //     },
    //     {
    //         id: 5,
    //         header: 'JavaScript Course',
    //         description: 'В течение курса студенты ознакомятся с ...',
    //         location: 'Минск',
    //     },
    //     {
    //         id: 6,
    //         header: 'JavaScript Course',
    //         description: 'В течение курса студенты ознакомятся с ...',
    //         location: 'Минск',
    //     },
    // ];

    return (
        <>
            <Header />

            <div className={style.wrapper}>
                <div>
                    <Input placeholder="Введите название курса" />
                </div>

                <div>
                    <Button>Поиск</Button>
                </div>
            </div>

            <div className={style.block} >
                {data?.map((el) => <div className={style.content} key={el.id}>
                    <h3>{el.header}</h3>
                    <p>{el.description}</p>
                    <p>{el.location}</p>
                </div>)}
            </div>

        </>
    )
}

export default HomePage;