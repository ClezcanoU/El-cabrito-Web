import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Register.css"

const Register = () => {

    const navigate = useNavigate();

    const [datos, setDatos] = useState({
        userName: '',
        direccion: '',
        tel1: '',
        tel2: '',
        email: '',
        password: ''
    });

    const cambioDatos = (e) => {
        const { name, value } = e.target;
        const actualizarDatos = { ...datos };
        actualizarDatos[name] = value;
        setDatos(actualizarDatos);
    }

    const enviarDatos = async (e) => {
        e.preventDefault();

        try {
            const respuesta = await fetch('http://localhost:1234/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datos),
            });

            if (respuesta.ok) {
                // Manejar la respuesta exitosa aquí
                console.log('Registro exitoso');
                navigate("/login");
            } else {
                // Manejar errores aquí
                console.error('Error al registrar');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    const navigateHome = (e) => {
        navigate("/");
    }

    return <div className="register">
        <nav className="header-register">
            <h1 className="titulo-register">EL CABRITO</h1>
            <svg onClick={navigateHome} className="logo-header" width="50" height="50" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3.25 12a8.75 8.75 0 1 0 17.5 0 8.75 8.75 0 0 0-17.5 0ZM22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-5.625-.625a.624.624 0 1 1 0 1.25H9.134l2.684 2.682a.627.627 0 0 1-.886.885l-3.75-3.75a.625.625 0 0 1 0-.885l3.75-3.75a.626.626 0 0 1 .886.886l-2.684 2.682h7.241Z" clip-rule="evenodd"></path>
            </svg>
        </nav>
        <section className="form-container-register">
            <h2>Crear Cuenta</h2>
            <form className="form-register" onSubmit={enviarDatos}>
                <label htmlFor="userName">userName</label>
                <input type="text" name="userName" id="userName"
                    value={datos.userName} placeholder="Nombre de Usuario" onChange={cambioDatos} required />
                <label htmlFor="email">Correo Electronico</label>
                <input type="email" name="email" id="email"
                    value={datos.email} placeholder="e-mail" onChange={cambioDatos} required />
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password"
                    value={datos.password} placeholder="Contraseña" onChange={cambioDatos} required />
                <label htmlFor="direccion">Direccion</label>
                <input type="direccion" name="direccion" id="direccion"
                    value={datos.direccion} placeholder="Direccion" onChange={cambioDatos} required />
                <label htmlFor="tel1">Telefono 1</label>
                <input type="tel1" name="tel1" id="tel1"
                    value={datos.tel1} placeholder="telefono 1" onChange={cambioDatos} required />
                <label htmlFor="tel2">Telefono 2 (Opcional)</label>
                <input type="tel2" name="tel2" id="tel2"
                    value={datos.tel2} placeholder="telefono 2" onChange={cambioDatos} />
                <button type="submit" className="boton-register">Registrarse</button>
            </form>
        </section>
    </div>
}

export default Register;