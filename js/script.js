let carrito = [];

function agregarProducto() {
  let producto = prompt("Ingrese el nombre del producto:");
  let precio = parseFloat(prompt("Ingrese el precio del producto:"));
  let cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));

  let nuevoProducto = {
    nombre: producto,
    precio: precio,
    cantidad: cantidad
  };

  carrito.push(nuevoProducto);

  alert(`${cantidad} ${producto}(s) ha(n) sido agregado(s) al carrito.`);
}

function eliminarProducto() {
  let indice = parseInt(prompt("Ingrese el número de índice del producto a eliminar:"));

  if (indice >= 1 && indice <= carrito.length) {
    let productoEliminado = carrito.splice(indice - 1, 1);
    alert(`${productoEliminado[0].nombre} ha sido eliminado del carrito.`);
  } else {
    alert("Índice inválido.");
  }
}

function verCarrito() {
  console.log("Productos en el carrito:");

  carrito.forEach((producto, index) => {
    console.log(`${index + 1}. ${producto.nombre} - Precio: ${producto.precio} - Cantidad: ${producto.cantidad}`);
  });
}

function calcularTotal() {
  let subtotal = 0;

  carrito.forEach((producto) => {
    subtotal += producto.precio * producto.cantidad;
  });

  let descuento = 0;

  if (subtotal > 100) {
    descuento = subtotal * 0.1; // Aplica un descuento del 10% si el subtotal es mayor a 100
  }

  let total = subtotal - descuento;

  alert(`Subtotal: $${subtotal.toFixed(2)}\nDescuento: $${descuento.toFixed(2)}\nTotal: $${total.toFixed(2)}`);
}
