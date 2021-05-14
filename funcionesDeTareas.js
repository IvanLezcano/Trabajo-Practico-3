// let process = require ("process")
// const comando = process.argv[2];
// const comando2 = process.argv[3];
// const comando3 = process.argv[4];
// const fs = require('fs');










let funciones = {

    crearObjeto:function(){
        let tareas=[{"titulo":"saltar","estado":"pndiente"},{"titulo":"sdasd","estado":"asdasdasdas"},{"titulo":"sdasd","estado":"asdasdasdas"},{"titulo":"saltar","estado":"pendiente"},{"titulo":"saltar","estado":"finalizado"}]
        localStorage.setItem("Tareas",JSON.stringify(tareas))}
    ,




    agregarTarea : function(titulo,estado="pendiente") {
        
        let nuevaTarea = { 
            titulo,
            estado
        }
        let tareas2 =JSON.parse(localStorage.getItem("Tareas"))
        tareas2.push(nuevaTarea)
        console.log(tareas2)
        localStorage.setItem("Tareas",JSON.stringify(tareas2))
        this.listarTareas2()

        
    },









 
    listarTareas2 : function(){
        
        let comando = document.getElementById('variable').value;
        let tareas = JSON.parse(localStorage.getItem("Tareas"))
        if (tareas=== null) {
            this.crearObjeto()
            
        }
        tareas2=[]
        for(let i = 0; i < tareas.length; i++) {
            tareas2.push(tareas[i].titulo+" "+tareas[i].estado);
            
        }
        console.log(tareas2)
        document.getElementById("listado").innerHTML = tareas2
    },





    filtrarNombre : function(filtro){
        let tareas= this.leerJson()
        let tareasFiltradas = tareas.filter(tarea=>tarea.titulo=== filtro);
        return tareasFiltradas.forEach(i =>{
            console.log(i.titulo+" "+i.estado)})
    },


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
        this.listarTareas2()
        
    },






    cambiarEstado : function(state,newstate){
        let tareas = this.leerJson
        let tareasmodificadas = tareas.map(tarea => {pass})
        this.guardarJson(tareasmodificadas)
        this.listarTareas2()

    }
    
}


















let prueba = () => {
    let comando = document.getElementById('variable').value;
    switch (comando) {
        case "agregar":
            let comando2 = document.getElementById('comando2').value;
            let comando3 = document.getElementById('comando3').value;
            // if(!comando2){
            //     console.log("debes escribir un titulo")
            //     break
            // }
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
// module.exports = operaciones






