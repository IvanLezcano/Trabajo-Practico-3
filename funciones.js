console.log("hola")
let scopee= parseInt(prompt("Test"))
console.log(scopee)




function escribir(){
    document.write("<p> hola"+ "</p>")
    
}
escribir()





function quepasa(){
    let vara = document.getElementById('variable').value;


    if(!vara){
        document.write("<p> hola usuario </p>")
        console.log(vara)
    }
    else{
        document.write("<p> hola "+ vara + " como andas?</p>")
        console.log(vara)
    }
}




function funcionaAfuera(){
    let vara = document.getElementById('variable').value;


    if(!scopee){
        document.write("<p> hola3 </p>")
        console.log(scopee)
    }
    else{
        document.write("<p> holaaaa"+ scopee + "</p>")
        console.log(scopee)
    }
}

