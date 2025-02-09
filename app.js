// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// alt=shit+f dar formato
let listaNombre = [];
let cont = 0;
let listaAmigos = document.getElementById('listaAmigos')// referencia a un elemento en el dom

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value; // Obtiene el valor del input
    console.log(nombre);
    //validar
    if (nombre == "")// todos los string simpre deben estar en comilla
    {
        alert("Ingrese un nombre valido");
    }
    else {
        listaNombre[cont] = nombre;
        cont++;
        // mostrar el nombre el el dom dentro de la listaAmigos
        let li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.append(li);
    }
}
