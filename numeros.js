// Función para verificar si un número es primo
function primos() {
let resp = document.getElementById("resp")
let num = document.getElementById("numero").value
  
  num = parseInt(num)

  if(isNaN(num)|| num < 2 ) {
    resp.value="por favor,introduce un numero mayor o igual a 2."
    return }

    let primo = 1 
    let divisor = 2
  // Bucle para verificar si num es divisible por algún número menor a sí mismo
  while (divisor < num && primo === 1) {
    if ( num % divisor === 0)
   {     // Si el residuo es 0, entonces no es primo
      primo = 0;
    } else {
      divisor++
    }
  }

  // Muestra si el número es primo o no
  if (primo === 1) {
    resp.value = `${num} Es Primo😊`
  } else {
    resp.value = `${num} No Es Primo😞`
  }
}
