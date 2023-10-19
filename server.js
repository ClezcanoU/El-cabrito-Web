import express, { json } from "express"
import { registerRouter } from "./routes/register.js"
import { authRouter } from "./routes/login.js"
import { corsMiddleware } from "./middlewares/cors.js"

const app = express()
app.use(json())
//app.use(corsMiddleware())
app.disable('x-powered-by')

app.use('/login', authRouter)
app.use('/register', registerRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})