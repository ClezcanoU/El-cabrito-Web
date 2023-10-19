import { Link } from "react-router-dom"

const Home = () => {
    return <>
        <header className="header-container">
            <div>
                <Link to="/">
                    <h1 className="header-titulo">El Cabrito</h1>
                </Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/register">registrarse</Link></li>
                    <li><Link to="/login">ingresar</Link></li>
                </ul>
            </nav>
        </header>
    </>
}

export default Home