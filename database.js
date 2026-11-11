import {Pool} from "pg"

const url = "postgresql://postgres:123@localhost:5432/oscar26"

export const database = new Pool({
    connectionString: url 
}) 
