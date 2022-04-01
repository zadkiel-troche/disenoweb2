
personas=[];

document.getElementById("btn-cargar").onclick=mostrarDatos;
document.getElementById("btn-limpiar").onclick=limpiarDatos;

window.onload = iniciarApp();

function iniciarApp(){
    cargarDatos();
}

function cargarDatos(){
    personas.push({"numci": "5158950", "nombre":"Zadkiel", "apellido":"Troche", "fec_nac":"16/06/2001", "direccion": "14 de Mayo / Honorio González"});
    personas.push({"numci": "326699-8", "nombre":"Juan", "apellido":"Roan", "fec_nac":"16/06/1982", "direccion": "Acceso Sur / Pirizal"});
    personas.push({"numci": "536521", "nombre":"Rosely", "apellido":"Garayo", "fec_nac":"08/04/2003", "direccion": "Frente a la UNAE"});
}

function limpiarDatos(){
    document.getElementById("data-table-personas").innerHTML="";
}

function mostrarDatos(){
    var salida="";
    for(var i=0; i < personas.length; i++){
        salida=salida+"<tr><th>"+i+"</th><td>"+personas[i].numci+"</td><td>"+personas[i].nombre+"</td><td>"+personas[i].apellido+"</td><td>"+personas[i].fec_nac+"</td><td>"+personas[i].direccion+"</td></tr>"
    }
    document.getElementById("data-table-personas").innerHTML=salida;
}