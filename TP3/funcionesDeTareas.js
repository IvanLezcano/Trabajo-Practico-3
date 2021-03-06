let process = require ("process")
const comando = process.argv[2];
const comando2 = process.argv[3];
const comando3 = process.argv[4];
const fs = require('fs');

let funciones = {
    leerJson : function() {
        return JSON.parse(fs.readFileSync('./tareas.json','utf-8'))
    },






    agregarTarea : function(titulo,estado="pendiente") {
        let nuevaTarea = { titulo,estado}
        let tareas = this.leerJson(); 
        tareas.push(nuevaTarea) 
        fs.writeFileSync('./tareas.json',JSON.stringify(tareas),'utf-8')
        this.listarTareas2()
    },






 
    listarTareas2 : function(){
        let tareas = this.leerJson()
        tareas.forEach(i =>{
        console.log(i.titulo+" "+i.estado);});
    },





    filtrarNombre : function(filtro){
        let tareas= this.leerJson()
        let tareasFiltradas = tareas.filter(tarea=>tarea.titulo=== filtro);
        return tareasFiltradas.forEach(i =>{
            console.log(i.titulo+" "+i.estado)})},


    filtrarEstado : function(filtro){
        let tareas= this.leerJson()
        let tareasFiltradas = tareas.filter(tarea=>tarea.estado=== filtro);
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
        this.listarTareas2()},




    guardarJson : function(tareas){
    fs.writeFileSync('./tareas.json',JSON.stringify(tareas),'utf-8')

    }}





















let prueba = () => {
    switch (comando) {
        case "agregar":
            if(!comando2){
                console.log("debes escribir un titulo")
                break
            }
            // else if(!comando3){
            //     console.log("debes escribir un estado")
            //     break
            // }
            funciones.agregarTarea(comando2,comando3)
            break;
        case "listar":
            funciones.listarTareas2()
            break
        case "filtrarEstado":
            funciones.filtrarEstado(comando2)
            break;
            case "filtrarNombre":
            funciones.filtrarNombre(comando2)
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