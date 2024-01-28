import miImagen from '../../img/titoxd.png';
import Comida from "../../img/pais.png"
import Casa from "../../img/sweet.png"
import Link from "../../img/chau.png"
import Git from "../../img/git.png"
import Insta from "../../img/holi.jpg"
import style from "./home.module.css"
import Nav from '../Nav/nav.jsx';


const Home = () => {
    return (
        <div className={style.todo}>

            <div>
                <Nav />
            </div>


            <div className={style.hola}>

                <div id="Inicio" className={style.intro}>
                    <h1> Granucci Hector </h1>
                    <h2>Full Stack Developer</h2>
                    <h3>Desarrollador web Full Stack Junior de 22 años.</h3>
                </div>

                <div className={style.img}>
                    <img src={miImagen} alt="miImagen" />
                </div>

            </div>

            <div className={style.tecno}>
                <h2>Tecnoligias</h2>
                <h3>  | JavaScript | CSS | Node | React |Redux | Express | MongoDb | Mongoose| Sequelize | PostgreSQL | Figma</h3>
            </div>


            <div id="Proyecto" className={style.Proyecto}>

                <div className={style.titulo}>
                    <h2>Proyectos</h2>
                </div>

                <div className={style.Pais}>
                    <h3>Pi Country</h3>
                    <img src={Comida} alt="comida" />
                    <h4>La página ofrece a los usuarios la posibilidad de explorar y obtener información detallada sobre todos los países del mundo. Permite realizar búsquedas, acceder a descripciones detalladas de cada país y aplicar filtros para facilitar la búsqueda de información específica.</h4>
                </div>

                <div className={style.Casa}>
                    <h3>Swwet Home</h3>
                    <img src={Casa} alt="casa" />
                    <h4>Una plataforma de e-commerce especializada en productos para el hogar de calidad premium. Los usuarios pueden explorar, buscar y filtrar productos, revisar detalles y realizar compras seguras. Con secciones dedicadas para la gestión de usuarios y clientes, la plataforma busca ofrecer una experiencia eficiente y satisfactoria.</h4>
                </div>

            </div>


            <div id="Redes" className={style.redes}>
                <h2>Mis Redes Sociales</h2>
                <a href="https://www.linkedin.com/in/hector-granucci-013476265/">
                    <img src={Link} alt="linke" />
                </a>
                <a href="https://github.com/hector-granucci">
                    <img src={Git} alt="git" />
                </a>
                <a href="https://www.instagram.com/eneasgranucci/">
                    <img src={Insta} alt="Insta" />
                </a>
            </div>

        </div>
    )
}

export default Home