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
            const response = await fetch('http://localhost:1234/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datos),
            });

            if (response.ok) {
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

    return <>
        <div className="form-container">
            <h2>Crear Cuenta</h2>
            <form className="form-register" onSubmit={enviarDatos}>
                <label htmlFor="userName">userName</label>
                <input type="text" name="userName" id="nuserName"
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
                <button type="submit">Registrarse</button>
            </form>
            <p>¿No tienes una cuenta? </p>
        </div>
    </>
}

export default Register;