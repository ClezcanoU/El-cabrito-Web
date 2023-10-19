import mysql from 'mysql2/promise'

const DEFAULT_CONFIG = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'cabritobasedatos'
}

const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG

const connection = await mysql.createConnection(connectionString)

export class model {
    static async getUserLogin(userName) {//pedir datos
        try {
            // Realizar una consulta para obtener datos del usuario por nombre de usuario
            const [rows] = await connection.execute('SELECT PASSWORD FROM usuarios WHERE USERNAME = ?', [userName]);

            if (rows.length === 1) {
                return rows[0];
            } else {
                return null; // Usuario no encontrado
            }
        } catch (error) {
            console.error('Error al obtener datos del usuario:', error);
            throw error;
        }
    }

    static async createUser({ input }) {//ingresar datos
        const { userName, direccion, tel1, tel2, email, password } = input;
        try {
            await connection.execute(
                'INSERT INTO clientes (USERNAME, DIRECCION, TEL1, TEL2, EMAIL) VALUES (?, ?, ?, ?, ?)',
                [userName, direccion, tel1, tel2, email]
            );

            await connection.execute(
                'INSERT INTO usuarios (USERNAME, PASSWORD) VALUES (?, ?)',
                [userName, password]
            );

            // Puedes retornar el nuevo usuario si es necesario
            return { userName, direccion, tel1, tel2, email };
        } catch (error) {
            console.error('Error en la creación de usuario:', error);
            throw error;
        }
    }

}