let process = require ("process")
const comando = process.argv[2];
const comando2 = process.argv[3];
const comando3 = process.argv[4];
const fs = require('fs');
let funciones = {
    leerJson : function() {
        return JSON.parse(fs.readFileSync('./tareas.json','utf-8'))
    },
    agregarTarea : function(titulo,estado) {
        /* con los paramaetros creo una nueva tarea */
        let nuevaTarea = { 
            titulo,
            estado
        }
        let tareas = this.leerJson(); //leo el array
        tareas.push(nuevaTarea) //agrego una nueva tarea!
        fs.writeFileSync('./tareas.json',JSON.stringify(tareas),'utf-8')
        this.listarTareas2()
    },
 
    listarTareas2 : function(){
        let tareas = this.leerJson()
        tareas.forEach(i =>{
        console.log(i.titulo+" "+i.estado);
            
        });
    },
    filtrar : function(filtro){
        let tareas= this.leerJson()
        let tareasFiltradas = tareas.filter(tarea=>tarea.estado=== filtro || tarea.titulo.includes(filtro));
        return tareasFiltradas.forEach(i =>{
            console.log(i.titulo+" "+i.estado)})
    },
    deshacer : function(){
        let tareas = this.leerJson()
        if(!tareas[0]){return console.log("no hay tarea")}
        tareas.pop()
        console.log("****************")
        console.log("tarea ah sido borrada")
        console.log("*******************")
        this.guardarJson(tareas)
        this.listarTareas2()
        
    },
    guardarJson : function(tareas){
    fs.writeFileSync('./tareas.json',JSON.stringify(tareas),'utf-8')

    },
    cambiarEstado : function(state,newstate){
        let tareas = this.leerJson
        let tareasmodificadas = tareas.map(tarea => {pass})
        this.guardarJson(tareasmodificadas)
        this.listarTareas2()

    }
    
}

//let prueba = argumento => argumento==="listar" ? listar():argumento === undefined ? console.log("Atención - Tienes que pasar una acción.") : console.log("No entiendo qué quieres hacer")
let prueba = () => {
    switch (comando) {
        case "agregar":
            if(!comando2){
                console.log("debes escribir un titulo")
                break
            }
            else if(!comando3){
                console.log("debes escribir un estado")
                break
            }
            funciones.agregarTarea(comando2,comando3)
            break;
        case "listar":
            funciones.listarTareas2()
            break
        case "filtrar":
            funciones.filtrar(comando2)
            break;
        case "borrar":
            funciones.deshacer(comando2)
            break;
        case "cambiar":
            funciones.cambiarEstado(comando2)
            break;
    
        default:
            break;
    }}

const operaciones = {
    "prueba": prueba,
    
}
module.exports = operaciones