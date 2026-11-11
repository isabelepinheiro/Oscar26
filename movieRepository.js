export class MovieRepository{
 constructor(database){
    this.database = database
 }

 async getAllMovies(){
    const sql = "select * from movie"
    const result = await this.database.query(sql)

    return result.rows
 }

 async getMovieById(id){
   const sql = "select * from movie where id = $1"
   const result = await this.database.query(sql, [id])
   return result.rows
 }

   async insertMovie(data){
      //tratamento de erro try catch
      try{
         const sql = "insert into movie values($1, $2, $3, $4)"
         const result = await this.database.query(sql, [
            data.id, 
            data.name, 
            data.gender, 
            data.description,
         ])

         return result.rows

      }catch(error){
         return {error: error.message}

      }
   }
}