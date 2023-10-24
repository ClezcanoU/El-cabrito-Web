import { model } from "../models/mysql/authentication.js";
import { validateLogin, validateRegister } from "../schemas/users.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export class auth {

    login = async (req, res) => {
        const validacion = validateLogin(req.body);

        if (!validacion.success) {
            return res.status(400).json({ error: JSON.parse(validacion.error.message) });
        }

        try {
            //recuperacion de datos
            const userData = await model.getUserLogin(validacion.data.userName);

            if (userData) {
                const validatePassword = bcrypt.compare(validacion.data.password, userData.PASSWORD);

                if (validatePassword) {
                    // Contraseña válida
                    const user = validacion.data.userName;
                    const token = jwt.sign(user, "secreto", { expiresIn: "1h" });
                    res.cookie("jwt", token, { httpOnly: true });
                    return res.status(200).json({ message: 'Inicio de sesión exitoso' });
                }
            }
            // Credenciales incorrectas o usuario no encontrado
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        } catch (error) {
            console.error('Error en la autenticación de usuario:', error);
            return res.status(500).json({ message: 'Error en el servidor' });
        }
    }


    register = async (req, res) => {
        try {
            const validacion = validateRegister(req.body);

            if (!validacion.success) {
                return res.status(400).json({ error: JSON.parse(validacion.error.message) });
            }

            // Encriptacion de contraseña
            const hashedPassword = await bcrypt.hash(validacion.data.password, 3); // 3 es el número de rondas de hash

            validacion.data.password = hashedPassword;

            const newUser = await model.createUser({ input: validacion.data });

            res.status(201).json(newUser);
        } catch (error) {
            console.error('Error en el registro de usuario:', error);
            return res.status(500).json({ message: 'Error en el servidor' });
        }
    }
}