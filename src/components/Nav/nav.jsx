import style from "./nav.module.css"
import Hg from "../../img/hg.jpeg"

const Nav = () => {
    return (



        <div className={style.todo}>
            <nav>
                <img src={Hg} alt="Hg" />
                <a href="#Proyecto">Proyectos</a>
                <a href="#Redes">Mis Redes Sociales</a>
            </nav>
        </div>
    )
}

export default Nav