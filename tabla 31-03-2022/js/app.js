
personas=[];

document.getElementById("btn-cargar").onclick=mostrarDatos;
document.getElementById("btn-limpiar").onclick=limpiarDatos;
document.getElementById("btn-nuevo").onclick=nuevoRegistro;
document.getElementById("btn-cancelar").onclick=cancelarForm;
document.getElementById("btn-guardar").onclick=procesarForm;

window.onload = iniciarApp();

function iniciarApp(){
    cargarDatos();
}

function cargarDatos(){
    personas.push({"numci": "5158950", "nombre":"Zadkiel", "apellido":"Troche", "fec_nac":"2001-06-16", "direccion": "14 de Mayo / Honorio González"});
    personas.push({"numci": "326699", "nombre":"Juan", "apellido":"Roan", "fec_nac":"1982-06-16", "direccion": "Acceso Sur / Pirizal"});
    personas.push({"numci": "536521", "nombre":"Rosely", "apellido":"Garayo", "fec_nac":"2023-04-16", "direccion": "Frente a la UNAE"});
}

function limpiarDatos(){
    document.getElementById("data-table-personas").innerHTML="";
}

function mostrarDatos(){
    var salida="";
    for(var i=0; i < personas.length; i++){
        salida=salida+"<tr><th>"+i+"</th><td>"+personas[i].numci+"</td><td>"+personas[i].nombre+"</td><td>"+personas[i].apellido+"</td><td>"+personas[i].fec_nac+"</td><td>"+personas[i].direccion+"</td><td><a class='EditBt btn btn-warning' data-idx="+i+">Editar</a> <a class='btn btn-danger' data-idx="+i+">Borrar</a> </td></tr>"
    }
    document.getElementById("data-table-personas").innerHTML=salida;
        btns = document.getElementsByClassName("EditBt");
        for(var i = 0; i  <btns.length; i++){
            btns[i].onclick=editarDatos;
        }
}

function cancelarForm(){
    var form = document.getElementById("formCargar");
    form.setAttribute("hidden", "");
}

function nuevoRegistro(){
    document.getElementById("idx").value="-1";
    document.getElementById("num_doc").value="";
    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    document.getElementById("fec_nac").value="";
    document.getElementById("direc").value="";

    document.getElementById("formCargar").removeAttribute("hidden");
    window.scroll(0, 300);
    document.getElementById("num_doc").focus();
}

function procesarForm()
{
  let idx=document.getElementById('idx').value;
  console.log(idx);
  if (idx==-1)
    {
        personas.push({"numci": document.getElementById('num_doc').value, "nombre": document.getElementById('nombre').value, "apellido": document.getElementById('apellido').value, "fec_nac": document.getElementById('fec_nac').value, "direccion": document.getElementById('direc').value});
    }
    else {
        personas[idx].numci=document.getElementById('num_doc').value;
        personas[idx].nombre=document.getElementById('nombre').value;
        personas[idx].apellido=document.getElementById('apellido').value;
        personas[idx].fec_nac=document.getElementById('fec_nac').value;
        personas[idx].direccion=document.getElementById('direc').value;
    }
    cancelarForm();
    mostrarDatos();
}

function editarDatos(e){

    let idxe=e.target.attributes["data-idx"].value;

    document.getElementById("idx").value=idxe;
    document.getElementById("num_doc").value=personas[idxe].numci;
    document.getElementById("nombre").value=personas[idxe].nombre;
    document.getElementById("apellido").value=personas[idxe].apellido;
    document.getElementById("fec_nac").value=personas[idxe].fec_nac;
    document.getElementById("direc").value=personas[idxe].direccion;

    document.getElementById("formCargar").removeAttribute("hidden");
    window.scroll(0, 500);

}

function borrarDatos(e){
    console.log(e.target)
    let idxe=e.target.attributes["data-idx"].value;

    personas.splice(0);

}