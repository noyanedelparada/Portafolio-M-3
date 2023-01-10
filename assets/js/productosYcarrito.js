let productos = [{

    nombre: "Elder ring",
    descripcion: "Elige el catalogado como mejor juego del año 2022.",
    precio: "$39.990",
    sku: "0001",
    imagen: "./assets/img/elden-ring-new-header-mobile.jpg"
},
{

    nombre: "Manilla PS5",
    descripcion: "Comoda y completamente nueva al mejor precio, con el diseño estandar de PS5.",
    precio: "$49.990",
    sku: "0002",
    imagen: "./assets/img//ps5.jpg"
},
{

    nombre: "Audifonos Razer",
    descripcion: "Sonido envolvente con aislador de sonido, con una excelente calidad de audio.",
    precio: "$20.990",
    sku: "0003",
    imagen: "./assets/img/razer.jpg"
},
{

    nombre: "Call of duty: Modern Warfare II",
    descripcion: "Adquiere uno de los juegos mas esperados del año.",
    precio: "$39.990",
    sku: "0004",
    imagen: "./assets/img/MWII-000-ARTREVEAL-TOUT.jpg"
},


]

let productosCarro = []

    if (localStorage.getItem ("productos")){

        productosCarro = JSON.parse (localStorage.getItem ("productos"));
        actCarro (productosCarro);
    }
    

cargarProductos(productos);

// funcion para cargar productos
function cargarProductos(listadoProductos) {
    let acumulador = "";    
    listadoProductos.forEach (producto => {

    let  template = `<div class="col-xl-6 col-xxl-3 col-sm-12 mt-5">
    <div class="card mx-auto text-bg-dark" style="width: 18rem">
      <img
        id="imagen-tarjeta"
        src= "${producto.imagen}"
        class="card-img-top"
        alt="${producto.nombre}"
      />
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">
        ${producto.descripcion}
        </p>
        <p class="d-flex justify-content-center">
        ${producto.precio}
        </p>
        <button
          id="agregar-carrito"
          type="submit"
          class="btn btn-primary"
          data-sku=${producto.sku}
          onclick = "agregarProductos ('${producto.sku}')"
        >
          Agregar al carrito
        </button>
       
      </div>
    </div>
    </div>`

acumulador += template;
})

document.querySelector("#productos .row").innerHTML = acumulador;




}



function agregarProductos (sku) {
    let objtProducto ={
        codigo: sku,
        cantidad: 1
    }
    productosCarro.push (objtProducto)
    

   localStorage.setItem ("productos", JSON.stringify(productosCarro))
  actCarro (productosCarro)
}

function actCarro (listadoProductos) {
    document.querySelector ("#cantidad-productos").innerText = listadoProductos.length
}