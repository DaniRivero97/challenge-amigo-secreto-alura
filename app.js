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

function sortearAmigo() {
    //determinar el tamano de mi vector
    //generar un numero random entre 0 cont-1
    // mostrar el ganador
    let numeroRamdom = parseInt(Math.random() * cont) - 1;
    let mostrarResultado=document.getElementById('resultado');
    mostrarResultado.append(listaNombre[numeroRamdom]);


}