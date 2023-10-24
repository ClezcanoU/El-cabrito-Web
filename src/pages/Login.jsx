import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Login.css";

const Login = () => {

    const navigate = useNavigate();

    const [datos, setDatos] = useState({
        userName: '',
        password: ''
    });

    const cambioDatos = (e) => {
        const { name, value } = e.target;
        const actualizarDatos = { ...datos };
        actualizarDatos[name] = value;
        setDatos(actualizarDatos);
    };

    const enviarDatos = async (e) => {
        e.preventDefault();

        try {
            const respuesta = await fetch("http://localhost:1234/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(datos),
            });

            if (respuesta.ok) {
                // Manejar inicio de sesión exitoso
                console.log("Inicio de sesión exitoso");
                navigate("/ingreso"); // Redirigir a la página del dashboard u otra página
            } else {
                // Manejar errores de inicio de sesión
                console.error("Credenciales incorrectas");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };

    const navigateRegister = (e) => {
        navigate("/register");
    }

    const navigateHome = (e) => {
        navigate("/");
    }

    return <div className="login">
        <nav className="header-register">
            <h1 className="titulo-register">EL CABRITO</h1>
            <svg onClick={navigateHome} className="logo-header" width="50" height="50" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3.25 12a8.75 8.75 0 1 0 17.5 0 8.75 8.75 0 0 0-17.5 0ZM22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-5.625-.625a.624.624 0 1 1 0 1.25H9.134l2.684 2.682a.627.627 0 0 1-.886.885l-3.75-3.75a.625.625 0 0 1 0-.885l3.75-3.75a.626.626 0 0 1 .886.886l-2.684 2.682h7.241Z" clip-rule="evenodd"></path>
            </svg>
        </nav>
        <section className="form-container-login"> 
            <h2>Iniciar Sesión</h2>
            <form className="form-login" onSubmit={enviarDatos}>
                <label htmlFor="userName">userName</label>
                <input type="text" name="userName" id="nuserName"
                    value={datos.userName} placeholder="Nombre de Usuario" onChange={cambioDatos} required />
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password"
                    value={datos.password} placeholder="Contraseña" onChange={cambioDatos} required />
                <button type="submit" className="boton-login">Iniciar Sesion</button>
                <p className="error-login">Error al iniciar sesión</p>
            </form>
            <p className="sin-cuenta" onClick={navigateRegister}>¿No tienes una cuenta?</p>
        </section>
    </div>
}

export default Login;