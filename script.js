document.addEventListener("DOMContentLoaded", () => {
    const carrito = [];
    const botonesAgregar = document.querySelectorAll(".add-to-cart");
    const botonVerCarrito = document.getElementById("ver-carrito");
    const carritoLista = document.getElementById("carrito");
  
    botonesAgregar.forEach((boton, index) => {
      boton.addEventListener("click", () => {
        const nombrePlato = boton.previousElementSibling.previousElementSibling.textContent;
        carrito.push(nombrePlato);
        alert(`${nombrePlato} ha sido añadido al carrito.`);
      });
    });
  
    botonVerCarrito.addEventListener("click", () => {
      carritoLista.classList.toggle("hidden");
      carritoLista.innerHTML = "";
  
      if (carrito.length === 0) {
        carritoLista.innerHTML = "<li>No hay productos en el carrito.</li>";
      } else {
        carrito.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          carritoLista.appendChild(li);
        });
      }
    });
  });
  
