/* 
  Lógica principal del sitio de la carnicería El Buen Corte.

  Funcionalidades:
  - Menú de navegación móvil (hamburguesa)
  - Desplazamiento suave entre secciones
  - Botón flotante de WhatsApp que aparece al hacer scroll
  - Datos de productos de ejemplo (remplazables por Supabase)
  - Renderizado dinámico de tarjetas de productos y filtros simples
*/

document.addEventListener("DOMContentLoaded", () => {
  inicializarAnioFooter();
  inicializarMenuMovil();
  inicializarScrollSuave();
  inicializarProductos();
  inicializarBotonWhatsAppFlotante();
});

/* -------- AÑO AUTOMÁTICO EN EL PIE -------- */

function inicializarAnioFooter() {
  const spanAnio = document.getElementById("anio-actual");
  if (!spanAnio) return;

  const anioActual = new Date().getFullYear();
  spanAnio.textContent = anioActual;
}

/* -------- MENÚ MÓVIL (HAMBURGUESA) -------- */

function inicializarMenuMovil() {
  const botonToggle = document.querySelector(".nav__toggle");
  const menu = document.getElementById("nav-menu");
  const links = menu ? menu.querySelectorAll(".nav__link") : [];

  if (!botonToggle || !menu) return;

  botonToggle.addEventListener("click", () => {
    const estaActivo = menu.classList.toggle("nav__links--activo");
    botonToggle.setAttribute("aria-expanded", String(estaActivo));
  });

  // Cerrar el menú al hacer clic en un enlace de navegación
  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (menu.classList.contains("nav__links--activo")) {
        menu.classList.remove("nav__links--activo");
        botonToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

/* -------- DESPLAZAMIENTO SUAVE -------- */

function inicializarScrollSuave() {
  const enlaces = document.querySelectorAll("[data-scroll]");

  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", (event) => {
      const href = enlace.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const destino = document.querySelector(href);
      if (!destino) return;

      event.preventDefault();
      destino.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/* -------- DATOS DE PRODUCTOS (EJEMPLO) -------- */

/*
  Array de productos de ejemplo. 
  En el futuro se puede remplazar por datos obtenidos desde Supabase.
*/
const productosEjemplo = [
    // HAMBURGUESAS
    {
      id: 1,
      categoria: "Hamburguesas",
      nombre: "Hamburguesa de pollo",
      descripcion: "Hamburguesa de pollo jugosa, ideal para la plancha o la parrilla.",
      precio: "8,90 €/ kilo",
      etiqueta: "Pollo",
      destacado: true,
    },
    {
      id: 2,
      categoria: "Hamburguesas",
      nombre: "Hamburguesa de pollo con espinacas",
      descripcion: "Mezcla de pollo y espinacas, más ligera y sabrosa.",
      precio: "8,90 € / kg",
      etiqueta: "Pollo con espinacas",
      destacado: false,
    },
    {
      id: 3,
      categoria: "Hamburguesas",
      nombre: "Hamburguesa de ternera",
      descripcion: "Clásica hamburguesa de ternera, carne tierna y sabrosa.",
      precio: "8,90 € / kg",
      etiqueta: "Ternera",
      destacado: true,
    },
    {
      id: 4,
      categoria: "Hamburguesas",
      nombre: "Hamburguesa de ternera picante",
      descripcion: "Hamburguesa de ternera con un toque picante para los que buscan más sabor.",
      precio: "8,90 € / kg ",
      etiqueta: "Ternera picante",
      destacado: false,
    },
    {
      id: 5,
      categoria: "Hamburguesas",
      nombre: "Hamburguesa de pollo con zanahoria",
      descripcion: "Hamburguesa de pollo con zanahoria rallada, muy jugosa y suave.",
      precio: "8,90 € / kg",
      etiqueta: "Pollo con zanahoria",
      destacado: false,
    },
  
    // POLLO (diferentes cortes)
    {
      id: 6,
      categoria: "Pollo",
      nombre: "Pollo entero",
      descripcion: "Pollo entero fresco, ideal para asar al horno.",
      precio: "4,50 € / kg",
      etiqueta: "Para asar",
      destacado: true,
    },
    {
      id: 7,
      categoria: "Pollo",
      nombre: "Pechuga de pollo",
      descripcion: "Pechugas de pollo frescas, perfectas para la plancha o empanar.",
      precio: "7,50 € / kg",
      etiqueta: "Corte magro",
      destacado: true,
    },
    {
      id: 8,
      categoria: "Pollo",
      nombre: "Muslo y contramuslo de pollo",
      descripcion: "Cortes jugosos para guisos, horno o barbacoa.",
      precio: "5,90 € / kg",
      etiqueta: "Para guisos y horno",
      destacado: false,
    },
    {
      id: 9,
      categoria: "Pollo",
      nombre: "Alitas de pollo",
      descripcion: "Alitas perfectas para freír, al horno o a la parrilla.",
      precio: "4,80 € / kg",
      etiqueta: "Para compartir",
      destacado: false,
    },
  
    // TERNERA
    {
      id: 10,
      categoria: "Ternera",
      nombre: "Filete de ternera",
      descripcion: "Filetes de ternera tiernos para la plancha o empanar.",
      precio: "15,90 € / kg",
      etiqueta: "Uso diario",
      destacado: true,
    },
    {
      id: 11,
      categoria: "Ternera",
      nombre: "Carne picada de ternera",
      descripcion: "Carne picada de ternera, ideal para albóndigas, boloñesa o rellenos.",
      precio: "12,50 € / kg",
      etiqueta: "Versátil",
      destacado: false,
    },
  
    // QUESOS
    {
      id: 12,
      categoria: "Quesos",
      nombre: "Queso semicurado",
      descripcion: "Queso de sabor suave, perfecto para bocadillos y tablas.",
      precio: "10,90 € / kg",
      etiqueta: "Semicurado",
      destacado: false,
    },
    {
      id: 13,
      categoria: "Quesos",
      nombre: "Queso curado",
      descripcion: "Queso de sabor intenso para amantes del sabor más fuerte.",
      precio: "13,90 € / kg",
      etiqueta: "Curado",
      destacado: false,
    },
    // EMBUTIDOS
    {
      id: 14,
      categoria: "Embutidos",
      nombre: "Mortadela de pollo",
      descripcion: "Mortadela de pollo suave, ideal para bocadillos y meriendas.",
      precio: "1,80 € / 100 g",
      etiqueta: "Pollo",
      destacado: false,
    },
    {
      id: 15,
      categoria: "Embutidos",
      nombre: "Mortadela de pavo",
      descripcion: "Mortadela de pavo con sabor suave y ligero.",
      precio: "1,80 € / 100 g",
      etiqueta: "Pavo",
      destacado: false,
    },
  ];

/* -------- RENDERIZADO DE PRODUCTOS -------- */

function inicializarProductos() {
  const contenedorProductos = document.getElementById("productos-lista");
  const botonesFiltro = document.querySelectorAll("[data-filtro]");

  if (!contenedorProductos) return;

  // Render inicial con todos los productos
  renderizarProductos(contenedorProductos, productosEjemplo);

  // Manejo de filtros por categoría
  botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", () => {
      const filtro = boton.getAttribute("data-filtro");

      // Activar visualmente el filtro elegido
      botonesFiltro.forEach((b) => b.classList.remove("chip--activo"));
      boton.classList.add("chip--activo");

      if (!filtro || filtro === "todos") {
        renderizarProductos(contenedorProductos, productosEjemplo);
        return;
      }

      const productosFiltrados = productosEjemplo.filter(
        (producto) => producto.categoria === filtro
      );
      renderizarProductos(contenedorProductos, productosFiltrados);
    });
  });
}

/**
 * Renderiza tarjetas de productos dentro del contenedor dado.
 * @param {HTMLElement} contenedor
 * @param {Array} productos
 */
function renderizarProductos(contenedor, productos) {
  contenedor.setAttribute("aria-busy", "true");
  contenedor.innerHTML = "";

  if (!productos.length) {
    const mensaje = document.createElement("p");
    mensaje.textContent = "No hay productos disponibles en esta categoría por el momento.";
    contenedor.appendChild(mensaje);
    contenedor.setAttribute("aria-busy", "false");
    return;
  }

  productos.forEach((producto) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta-producto";
    if (producto.destacado) {
      tarjeta.classList.add("tarjeta-producto--destacado");
    }
    tarjeta.setAttribute("data-categoria", producto.categoria);

    const nombre = document.createElement("h3");
    nombre.className = "tarjeta-producto__nombre";
    nombre.textContent = producto.nombre;

    const descripcion = document.createElement("p");
    descripcion.className = "tarjeta-producto__descripcion";
    descripcion.textContent = producto.descripcion;

    const info = document.createElement("div");
    info.className = "tarjeta-producto__info";

    const precio = document.createElement("span");
    precio.className = "tarjeta-producto__precio";
    precio.textContent = producto.precio;

    const etiqueta = document.createElement("span");
    etiqueta.className = "tarjeta-producto__etiqueta";
    etiqueta.textContent = producto.etiqueta;

    info.appendChild(precio);
    info.appendChild(etiqueta);

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(info);

    contenedor.appendChild(tarjeta);
  });

  contenedor.setAttribute("aria-busy", "false");
}

/* -------- BOTÓN WHATSAPP FLOTANTE -------- */

function inicializarBotonWhatsAppFlotante() {
  const botonFlotante = document.getElementById("whatsapp-flotante");
  if (!botonFlotante) return;

  const umbralScroll = 220; // píxeles desde la parte superior

  const manejarScroll = () => {
    const desplazamiento = window.scrollY || window.pageYOffset;

    if (desplazamiento > umbralScroll) {
      botonFlotante.classList.add("whatsapp-flotante--visible");
    } else {
      botonFlotante.classList.remove("whatsapp-flotante--visible");
    }
  };

  window.addEventListener("scroll", manejarScroll, { passive: true });

  // Comprobar una vez al iniciar por si la página abre ya desplazada
  manejarScroll();
}