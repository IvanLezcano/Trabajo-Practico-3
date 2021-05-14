







let funciones = {

    
    crearObjeto:function(){
        let tarea=[]
        localStorage.setItem("Tareas",JSON.stringify(tarea))
        
    },





  

    agregarTarea : function(titulo,estado) {
        let nuevaTarea={}
        if(estado===""){
         nuevaTarea = { 
                titulo:titulo,
                estado:"pendiente"
            } 
        }else{

         nuevaTarea = { 
            titulo:titulo,
            estado:estado
        }}
        if (localStorage.getItem("Tareas") === null) {
            this.crearObjeto()}





        let tareas2 =JSON.parse(localStorage.getItem("Tareas"))
        tareas2.push(nuevaTarea)
        console.log(tareas2)
        localStorage.setItem("Tareas",JSON.stringify(tareas2))
        this.listarTareas2()
        document.getElementById("mensaje").innerHTML = "Tarea agregada!:"


        
    },









 
    listarTareas2 : function(){
        
        if (localStorage.getItem("Tareas") === null) {
        this.crearObjeto()}
        
            
        let tarea = JSON.parse(localStorage.getItem("Tareas"))
        console.log(tarea[0])
    
        if(tarea[0]===undefined){
            document.getElementById("mensaje").innerHTML = "no tenes tareas pendientes!"

        }
        
        tareas2=[]
        for(let i = 0; i < tarea.length; i++) {
            tareas2.push("<br>"+tarea[i].titulo+" "+tarea[i].estado);
            
        }
        console.log(tareas2)
        document.getElementById("listado").innerHTML = "estas son sus tareas! :"+ tareas2
    },





    filtrarNombre : function(){
        let filtro = document.getElementById('comando2').value;

        let tareas =JSON.parse(localStorage.getItem("Tareas"))
        let tareasFiltradas = tareas.filter(tarea=>tarea.titulo=== filtro);
        tareas2=[]
        for(let i = 0; i < tareasFiltradas.length; i++) {
            tareas2.push("<br>"+tareasFiltradas[i].titulo+" "+tareasFiltradas[i].estado);
            
        }
        document.getElementById("listado").innerHTML = "estas son sus tareas! :"+tareas2
        document.getElementById("mensaje").innerHTML = "Tarea filtrada por nombre"

    },


    filtrarEstado : function(){
        let filtro = document.getElementById('comando3').value;

        let tareas =JSON.parse(localStorage.getItem("Tareas"))
        let tareasFiltradas = tareas.filter(tarea=>tarea.estado=== filtro);
        tareas2=[]
        for(let i = 0; i < tareasFiltradas.length; i++) {
            tareas2.push("<br>"+tareasFiltradas[i].titulo+" "+tareasFiltradas[i].estado);
            
        }
        document.getElementById("listado").innerHTML = "estas son sus tareas! :"+tareas2
        document.getElementById("mensaje").innerHTML = "Tarea filtrada por estado!"

    },




    deshacer : function(){
        let tareaporborrar = document.getElementById('comando2').value;

        let tareas = JSON.parse(localStorage.getItem("Tareas"))
        if(!tareas[0]){return console.log("no hay tarea")}
        let tareasnuevas = tareas.filter(tarea => tarea.titulo !==tareaporborrar );
        console.log(tareaporborrar)
        console.log("tarea ah sido borrada")
        console.log("*******************")
        localStorage.setItem("Tareas",JSON.stringify(tareasnuevas))
        document.getElementById("mensaje").innerHTML = "tarea ah sido borrada"
        this.listarTareas2()
        
    }





}


















let prueba = () => {
    let comando = document.getElementById('variable').value;
    let comando2 = document.getElementById('comando2').value;



    switch (comando) {
        case "agregar":
            let comando2 = document.getElementById('comando2').value;
            let comando3 = document.getElementById('comando3').value;
             if(!comando2){
                document.getElementById("mensaje").innerHTML = "Porfavor pone una tarea valida"
                 break
                }
                
            funciones.agregarTarea(comando2,comando3)
            break;
        case "listar":
            funciones.listarTareas2()
            break
        case "filtrarEstado":
        case "filtrarestado":
        case "filtrar estado":
        case "filtrar Estado":
            funciones.filtrarEstado()
            break;
        case "filtrarNombre":   
        case "filtrarnombre":
        case "filtrar nombre":
        case "filtrar Nombre":
            funciones.filtrarNombre()
            break;
        case "borrar":
            funciones.deshacer()
            break;
        case "cambiar":
            funciones.cambiarEstado(comando2)
            break;
        
        default:
            document.getElementById("mensaje").innerHTML = "Porfavor pone un comando valido en accion"

            break;
    }}

const operaciones = {
    "prueba": prueba,
    
}






