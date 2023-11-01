import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

//  1.- Iniciar la aplicacion !!!
const app = express();

// 2.- configuracione generales
const PORT = process.env.PORT || 5000;

//3.- Middlewares

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//4.-


//5.-Iniciar el loop del servidor
app.listen(PORT,()=>{
    console.log(`servidor ejecutandose en el puerto ${PORT}`)
})
