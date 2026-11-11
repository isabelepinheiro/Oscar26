
import express from "express"
import { getAllMovies, getMovieById, insertMovie } from "./controller.js"

const server = express()
const port = 8080

server.use(express.json())

//Rotas ou Endpoints
server.get("/movie/all", getAllMovies) // pegar todos os filmes
server.get("/movie/:id", getMovieById) // pegar pelo id

server.post("/movie", insertMovie)



//cair na prova get e put
//put atualizar
//post inserir
//patch atualizar parcialmente

server.listen(port, () => console.log("SERVER ON!"))

