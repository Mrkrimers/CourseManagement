import { Link } from 'react-router-dom'
import style from '../Header/style.module.scss'


function Header() {
    return (
        <>
            <div className={style.container}>

                <Link to={'/'}>   <h2>CoursesRUD.</h2> </Link>

                <div className={style.wrapper}>
                    <Link to={'/admin'}> <p>Администрирование</p> </Link>
                    <Link to={'/'}> <p>Просмотр</p> </Link>
                </div>

            </div>
        </>
    )
}

export default Header;