import Header from "../../components/Header/Header";


function HomePage() {
    const coursesArr = [
        {
            id: 1,
            header: 'C# Course',
            description: 'В течение курса студенты ознакомятся с ...',
            location: 'Минск',
        },
        {
            id: 2,
            header: 'JavaScript Course',
            description: 'В течение курса студенты ознакомятся с ...',
            location: 'Минск',
        },
        {
            id: 3,
            header: 'C# Course',
            description: 'В течение курса студенты ознакомятся с ...',
            location: 'Минск',
        },
        {
            id: 4,
            header: 'JavaScript Course',
            description: 'В течение курса студенты ознакомятся с ...',
            location: 'Минск',
        },
        {
            id: 5,
            header: 'JavaScript Course',
            description: 'В течение курса студенты ознакомятся с ...',
            location: 'Минск',
        },
        {
            id: 6,
            header: 'JavaScript Course',
            description: 'В течение курса студенты ознакомятся с ...',
            location: 'Минск',
        },
    ];

    return (
        <>
            <Header />

            <div className="wrapper">
                <div>
                    <input placeholder="Введите название курса" />
                </div>

                <div>
                    <button>Поиск</button>
                </div>

                {coursesArr.map((el) => <div key={el.id}>
                    <h6>{el.header}</h6>
                    <p>{el.description}</p>
                    <p>{el.location}</p>
                </div>)}

            </div>
        </>
    )
}

export default HomePage;