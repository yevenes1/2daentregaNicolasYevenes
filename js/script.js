function calcularEdad() {
    let nombre = prompt("Ingrese su nombre:");
    let añoNacimiento = prompt("Ingrese su año de nacimiento:");
    
    const fechaActual = new Date();
    const añoActual = fechaActual.getFullYear();
    
    let edad = añoActual - añoNacimiento;
  
    let resultado = `Hola, ${nombre}. Tienes ${edad} años.`;
    alert(resultado);
  }
  