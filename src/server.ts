import "dotenv"
import "./database/index"
import app from './app'
import 'reflect-metadata'

app.listen(3000, () => console.log('server running'))

export default app;