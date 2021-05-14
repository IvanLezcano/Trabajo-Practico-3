// let process = require ("process")
// let operaciones = require("./funcionesDeTareas")


function crearObjeto(){
    let tareas=[{"titulo":"saltar","estado":"pndiente"},{"titulo":"sdasd","estado":"asdasdasdas"},{"titulo":"sdasd","estado":"asdasdasdas"},{"titulo":"saltar","estado":"pendiente"},{"titulo":"saltar","estado":"finalizado"}]
    localStorage.setItem("Tareas",JSON.stringify(tareas));
}