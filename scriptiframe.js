const footerParentIframe = window.parent.document.querySelector("footer");

function callback(entries, observer) {  
    
    entries.forEach(entry => {
        if (entry.isIntersecting) {     
            
            let oldScrollY = window.scrollY;
            window.onscroll = function(e) {
              if(oldScrollY <= window.scrollY){
                footerParentIframe.classList.remove("footer--hide");
              } else {
                footerParentIframe.classList.add("footer--hide");
              }
              oldScrollY = window.scrollY;
            }

        } 
    });

}

let options = {  root: null,  rootMargin: '0px' };

let hideParentFooter = new IntersectionObserver(callback, options);

hideParentFooter.observe(footerParentIframe);