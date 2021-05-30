
    var btnBurger = document.querySelector('.btn-burger');
    var nav = document.querySelector('.nav');
    var menu = document.querySelector('.menu');
    var lien = document.querySelectorAll('.lien')

    var myFullpage = new fullpage('#fullpage', {
        //responsiveWidth: 900,
        menu: '#menu',
        anchors: ['qui-suis-je', 'competences', 'formations-et-experiences', 'langues-et-interets'],
        autoScrolling: true,
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',

        onLeave: function(origin, destination, direction){
            
            if(window.matchMedia("(max-width:900px)").matches){
                if(origin.index == 0 && direction =='down'){
                    //leave section 0
                    nav.classList.toggle("nav-dark")

                }else if(origin.index !== 0 && destination.index == 0 && direction =='up' && screen){
                    //going to 0
                    nav.classList.toggle("nav-dark")
                }
            }else if(window.matchMedia("(min-width:900px)").matches){
                if(origin.index == 0 && direction =='down'){
                    //leave section 0
                    nav.classList.toggle("nav-dark-full")

                }else if(origin.index !== 0 && destination.index == 0 && direction =='up' && screen){
                    //going to 0
                    nav.classList.toggle("nav-dark-full")
                }
            }
        }, 
        
    });

// Animation btn-burger


    btnBurger.addEventListener("click", function(){
        nav.classList.toggle("extendNav");
        menu.classList.toggle("d-none");
    });

    for (i = 0; i < lien.length; ++i) {
        lien[i].addEventListener("click", function(){
            nav.classList.toggle("extendNav");
        });
    }