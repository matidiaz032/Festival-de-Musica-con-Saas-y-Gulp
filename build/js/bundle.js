document.addEventListener('DOMContentLoaded', function() {
   scrollNav()

   navegacionFija();
})

//header fijo a la mitad de la pagina
function navegacionFija() {

   const barra = document.querySelector('.header');

   //Registrar el Itersection Observer
   const observer = new IntersectionObserver( function(entries) {
      if (entries[0].isIntersecting) {
         barra.classList.remove('fijo')
      } else {
         barra.classList.add('fijo')
      }
   });

   //Elemento a observar
   observer.observe(document.querySelector('.sobre-festival'));
}

// Smooth scrol
function scrollNav() {
   const enlaces = document.querySelectorAll('.navegacion-principal a');

   enlaces.forEach(enlace => {
      enlace.addEventListener('click', function(e) {
         e.preventDefault(); //elimina la accion por default

         const seccion = document.querySelector(e.target.attributes.href.value);

         seccion.scrollIntoView({ //funcion de js para el scroll
            behavior: 'smooth'
         })
      })
   })
}
document.addEventListener('DOMContentLoaded', function () {
    crearGaleria();
})

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('IMG'); // crea una etiqueta img
        imagen.src = `build/img/thumb/${i}.webp`; // <img src="">
        imagen.dataset.imagenId = i; // crea un atributo 'data' en cada img

        //Añadir la funcion de agrandar imagen
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}

function mostrarImagen(e) {
    const id = parseInt( e.target.dataset.imagenId );
    
    //Generar la imagen
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;
    imagen.classList.add('img-grande')

    //Efecto oscuro
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //click fuera de la imagen para cerrar
    overlay.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar-body')
    }

    //Boton para cerrar la imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    //Click para cerrar
    cerrarImagen.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar-body')
    }

    overlay.appendChild(cerrarImagen); 

    //Mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);

    //eliminar scroll
    body.classList.add('fijar-body');
}