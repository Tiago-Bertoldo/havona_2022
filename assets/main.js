function start() {
    menuResponsive();
    hoverProblems();
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

function hoverProblems(){
    let icsRisk = document.querySelector('.risk');
    let icsCost = document.querySelector('.cost');
    let icsTransp = document.querySelector('.transparency');
    let icsTrust = document.querySelector('.trust');
    let icsPaper = document.querySelector('.paper');
    let icsEmail = document.querySelector('.email');
    let iconSelectd = document.querySelector('.ics_risk');
    let iconSelectCost = document.querySelector('.ics_cost');
    let iconSelectTransp = document.querySelector('.ics_transp');
    let iconSelectTrust = document.querySelector('.ics_trust');
    let iconSelectPaper = document.querySelector('.ics_paper');
    let iconsSelectEmail = document.querySelector('.ics_email');

    let sets = 0;
    addEventListener('click' , e => {
        const el = e.target ;
                    if (el.classList.contains('ics_risk')){
                    icsRisk.classList.toggle('trusts');
                    console.log('Cheguei aqui');
                }else {
                if (el.classList.contains('ics_risk' || sets >= 1)) {
                    icsRisk.classList.remove('trusts');
                }
            }
                if (el.classList.contains('ics_cost') && sets === 0 ){
                    icsCost.classList.toggle('trusts');
                }else {
                if (el.classList.contains('ics_cost' || sets >= 1)) {
                    icsCost.classList.remove('trusts');
    
                }
            }

                if (el.classList.contains('ics_transp') && sets === 0 ){
                    icsTransp.classList.toggle('trusts');
                }else {
                    if (el.classList.contains('ics_transp' || sets >= 1)) {
                        icsTransp.classList.remove('trusts');
                    }
                }
        
                if (el.classList.contains('ics_trust') && sets === 0 ){
                    icsTrust.classList.toggle('trusts');
                }else {
                    if (el.classList.contains('ics_trust' || sets >= 1)) {
                        icsTrust.classList.remove('trusts');
        
                    }
                }
        
                if (el.classList.contains('ics_paper') && sets === 0 ){
                    icsPaper.classList.toggle('trusts');
                }else {
                    if (el.classList.contains('ics_paper' || sets >= 1)) {
                        icsPaper.classList.remove('trusts');
                    }
                }
       
                if (el.classList.contains('ics_email') && sets === 0 ){
                    icsEmail.classList.toggle('trusts');
                }else {
                    if (el.classList.contains('ics_email' || sets >= 1)) {
                        icsEmail.classList.remove('trusts');
                    }
                }
         
    })

    addEventListener('mouseover' , e => {
        const el = e.target ;
        if(el.classList.contains('img-plus')){
            iconSelectd.classList.toggle('img-kick');
        }else {
            iconSelectd.classList.remove('img-kick')
        }
            
    })
}

start();