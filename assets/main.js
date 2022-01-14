function start() {
    menuResponsive();
    effect();
}


const menuResponsive = ()=>{
    let menu = document.querySelector('.menu')
    let body = document.querySelector('.nav');
    let resposive = document.querySelector('.menu-resposive')
     document.addEventListener('click' , e => {
        const el = e.target;
        if (el.classList.contains('burger') || el.classList.contains('menu-resposive')){
            menu.classList.toggle('nav-active');
        }
        else {
            menu.classList.remove('nav-active')
        }
        if (el.classList.contains('burger') || el.classList.contains('menu-resposive')) {
            resposive.classList.toggle('toggle');
        }
        else {
            resposive.classList.remove('toggle')
        }
        

    });
    
        
}

function effect () {
    let side = document.querySelectorAll('.plus-icon')
    let container = document.querySelector('.container-two');
    let experience = document.querySelector('.effect');
    let cordenadas = window.pageYOffset;
    console.log(side[1])    
    if (cordenadas >= 400 ){
        side[0].classList.add('toone');
        side[1].classList.add('toone');
        container.classList.add('effect-container');

        if (cordenadas >= 550){
            side[2].classList.add('toone');
            side[3].classList.add('toone');
        }
            if (cordenadas >= 650){
                side[4].classList.add('toone');
                side[5].classList.add('toone');
            }
    }
    
}


window.addEventListener('scroll' , function (){
    effect();
});

start();