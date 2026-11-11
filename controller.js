import { database } from "./database.js"
import { MovieRepository } from "./movieRepository.js";

const movieRep = new MovieRepository(database)

export async function getAllMovies(request, response){
const result = await movieRep.getAllMovies()
   

    response.json(result);
}

export async function getMovieById(request, response){
    const id = request.params.id
    const result = await movieRep.getMovieById(id)
    response.json(result);
    
}

export async function insertMovie(request, response){
    const data = request.body

    const result = await movieRep.insertMovie(data)

    if (request.error) {
        return response.status(500).json("Error inserting movie")
        
    }
    response.status(200).json("Movie inserted successfully");
}


