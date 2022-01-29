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