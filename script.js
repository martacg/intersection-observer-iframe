const footer = document.querySelector("footer");

const hideFooter = (entradas, observador) => {

    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            
            console.log("el footer está en el viewport");

            let oldScrollY = window.scrollY;
            window.onscroll = function(e) {
              if(oldScrollY < window.scrollY){
                  //console.log(" Down");
              } else {
                  console.log('scroll up > ocultar footer');
              }
              oldScrollY = window.scrollY;
            }

        }
    });

}

const observador = new IntersectionObserver(hideFooter, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0
});

observador.observe(footer);