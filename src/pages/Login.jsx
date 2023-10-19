
const Login = () =>{

    return <>
        <div>
            <h2>Iniciar Sesión</h2>
            <form>
                <label htmlFor="User">UserName</label>
                <input type="text" name="User" id="User" placeholder="Nombre de Usuario" required/>
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" placeholder="Contraseña" required/>
                <button type="submit">Iniciar Sesion</button>
                <p>Error al iniciar sesión</p>
            </form>
            <p>¿No tienes una cuenta?</p>
        </div>
    </>
}

export default Login;