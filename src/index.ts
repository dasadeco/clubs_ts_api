// const clubs = require("../es.1.clubs.json");
// console.log(clubs);
import createServer  from "./server";


createServer().listen(3000, () =>{
    console.log("Ya estamos escuchando");   
})