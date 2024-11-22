// Función para agregar un espacio entre cada carácter de la palabra ingresada
function generarEspaciado() {
  // Obtener la palabra ingresada por el usuario
  const palabra = document.getElementById("palabra").value;
  // obtener el control para asignar la respuesta
  const respuesta = document.getElementById("resp");

  // Inicializar una variable para almacenar la nueva palabra con espacios
  let resultado = "";

  // Usar un bucle para recorrer cada carácter de la palabra
  for (let i = 0; i < palabra.length; i++) {
    // Agregar el carácter actual a la variable resultado seguido de un espacio
    // if (palabra[i]=="a")
    resultado += palabra[i] + " ";
  }

  // Mostrar el resultado en el área de texto
  respuesta.innerHTML = resultado.trim(); // Eliminar el último espacio al final
}