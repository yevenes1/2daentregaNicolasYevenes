function realizarCalculo(operacion) {
  let num1 = Number(prompt("Ingrese el primer número:"));
  let num2 = Number(prompt("Ingrese el segundo número:"));

  let resultado;

  switch (operacion) {
    case 'suma':
      resultado = num1 + num2;
      break;
    case 'resta':
      resultado = num1 - num2;
      break;
    case 'concatenar':
      resultado = num1.toString() + num2.toString();
      break;
    case 'division':
      resultado = num1 / num2;
      break;
    case 'porcentaje':
      resultado = (num1 * num2) / 100;
      break;
    default:
      alert("Operación no válida.");
      return;
  }

  alert(`El resultado de la operación "${operacion}" es: ${resultado}`);
}
