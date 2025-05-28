//esto sale desde express de node modules
import express, { Request, Response } from "express"
import dotenv from "dotenv"

//definamos los endpoint va aser /TODOS la funcion principal es devolver al frontend una lista de TODO , es el metodo
//get
//Input: -

//output: va a devolver una lista de Todo ,

/*
    {id:1 , desc:""}
    {id:2, desc:""}
    ......

 */

dotenv.config()
const app = express()

const PORT = process.env.PORT

app.get("/", (req : Request, resp : Response) => {
    resp.send("Endpoint raiz")
})

//guiandonos desde readme.md
app.get("/todos", (req : Request, resp : Response)=>{
        //como todavia no quiero trabajar con base de datos haremos una lista 
        const todos = [
        {id:1,descripcion:"Preparar la comida"},
        {id:2,descripcion:"Estudiar"},
        //esto simplemente es una lista con la forma, ahora lo devolvemos al frontend


        ]
        //esto simplemente es una lista con la forma, ahora lo devolvemos al frontend

         resp.json(todos)

} )

app.listen(PORT, () => {
    console.log(`Se inicio servidor en puerto ${PORT}`)
})
