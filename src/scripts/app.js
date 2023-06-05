import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* prof */
var ptoggleProf = document.querySelector(".p__prof");
var iconeUser1 =  document.querySelector(".icone__user1");
if(iconeUser1){
    iconeUser1.addEventListener("click",text_add1);
}
function text_add1(){
    ptoggleProf.classList.add('p__toggle');
    iconeUser1.classList.add('blurr__icone');
}
if(ptoggleProf){
    ptoggleProf.addEventListener("click",text_supr1);
}
function text_supr1(){
    ptoggleProf.classList.remove('p__toggle');
    iconeUser1.classList.remove('blurr__icone');
}

/* joue */
var ptoggleJoue = document.querySelector(".p__joue");
var iconeUser2 =  document.querySelector(".icone__user2");
if(iconeUser2){
    iconeUser2.addEventListener("click",text_add2);
}
function text_add2(){
    ptoggleJoue.classList.add('p__toggle');
    iconeUser2.classList.add('blurr__icone');
}
if(ptoggleJoue){
    ptoggleJoue.addEventListener("click",text_supr2);
}
function text_supr2(){
    ptoggleJoue.classList.remove('p__toggle');
    iconeUser2.classList.remove('blurr__icone');
}

/* arti */
var ptoggleArti = document.querySelector(".p__arti");
var iconeUser3 =  document.querySelector(".icone__user3");
if(iconeUser3){
    iconeUser3.addEventListener("click",text_add3);
}
function text_add3(){
    ptoggleArti.classList.add('p__toggle');
    iconeUser3.classList.add('blurr__icone');
}
if(ptoggleArti){
    ptoggleArti.addEventListener("click",text_supr3);
}
function text_supr3(){
    ptoggleArti.classList.remove('p__toggle');
    iconeUser3.classList.remove('blurr__icone');
}

window.addEventListener('scroll', function() {
    var menuLinks = document.querySelectorAll('.nav__link');
  
    for (var i = 0; i < menuLinks.length; i++) {
      var section = document.getElementById('section' + (i + 1));
      var rect = section.getBoundingClientRect();
  
      if (rect.top >= 0 && rect.top <= window.innerHeight) {
        menuLinks[i].classList.add('active');
      } else {
        menuLinks[i].classList.remove('active');
      }
    }
  });

 /* user btn */
var cadreUser = document.querySelector(".legende__user");
cadreUser.addEventListener("click", afficherCadre);
  
function afficherCadre() {
    document.getElementById('cadre-user').style.display = 'block';
    document.getElementById('cadre-user').style.animation = 'fade-in 0.3s forwards';

}

var croixUser =  document.getElementById('croix-user');
croixUser.addEventListener('click', masquerCadre);

function masquerCadre() {
    document.getElementById('cadre-user').style.display = 'none';
    document.getElementById('cadre-user').style.animation = 'fade-out 0.3s forwards';

  }
/* renc btn */
var cadreRenc = document.querySelector(".legende__renc");
cadreRenc.addEventListener("click", afficherCadreR);
  
function afficherCadreR() {
    document.getElementById('cadre-renc').style.display = 'block';
    document.getElementById('cadre-renc').style.animation = 'fade-in 0.3s forwards';

}

var croixRenc =  document.getElementById('croix-renc');
croixRenc.addEventListener('click', masquerCadreR);

function masquerCadreR() {
    document.getElementById('cadre-renc').style.display = 'none';
    document.getElementById('cadre-renc').style.animation = 'fade-out 0.3s forwards';

  }


var blurrHypo1 = document.querySelector('.hypo__para--1')
var blurrHypo2 = document.querySelector('.hypo__para--2')
var blurrHypo3 = document.querySelector('.hypo__para--3')
/* hypo1 btn */
var cadreH1 = document.querySelector(".hypo__link--1");
cadreH1.addEventListener("click", afficherCadreH1);
  
function afficherCadreH1() {
    document.getElementById('cadre-h1').style.display = 'block';
    document.getElementById('cadre-h1').style.animation = 'fade-in 0.3s forwards';
    blurrHypo1.classList.add('blurr__hypo');
    blurrHypo2.classList.add('blurr__hypo');
    blurrHypo3.classList.add('blurr__hypo');
}

var croixH1 =  document.getElementById('croix-h1');
croixH1.addEventListener('click', masquerCadreH1);

function masquerCadreH1() {
    document.getElementById('cadre-h1').style.display = 'none';
    document.getElementById('cadre-h1').style.animation = 'fade-out 0.3s forwards';
    blurrHypo1.classList.remove('blurr__hypo');
    blurrHypo2.classList.remove('blurr__hypo');
    blurrHypo3.classList.remove('blurr__hypo');
  }

/* hypo2 btn */
var cadreH2 = document.querySelector(".hypo__link--2");
cadreH2.addEventListener("click", afficherCadreH2);
  
function afficherCadreH2() {
    document.getElementById('cadre-h2').style.display = 'block';
    document.getElementById('cadre-h2').style.animation = 'fade-in 0.3s forwards';
    blurrHypo1.classList.add('blurr__hypo');
    blurrHypo2.classList.add('blurr__hypo');
    blurrHypo3.classList.add('blurr__hypo');
}

var croixH2 =  document.getElementById('croix-h2');
croixH2.addEventListener('click', masquerCadreH2);

function masquerCadreH2() {
    document.getElementById('cadre-h2').style.display = 'none';
    document.getElementById('cadre-h2').style.animation = 'fade-out 0.3s forwards';
    blurrHypo1.classList.remove('blurr__hypo');
    blurrHypo2.classList.remove('blurr__hypo');
    blurrHypo3.classList.remove('blurr__hypo');
  }

/* hypo3 btn */
var cadreH3 = document.querySelector(".hypo__link--3");
cadreH3.addEventListener("click", afficherCadreH3);
  
function afficherCadreH3() {
    document.getElementById('cadre-h3').style.display = 'block';
    document.getElementById('cadre-h3').style.animation = 'fade-in 0.3s forwards';
    blurrHypo1.classList.add('blurr__hypo');
    blurrHypo2.classList.add('blurr__hypo');
    blurrHypo3.classList.add('blurr__hypo');
}

var croixH3 =  document.getElementById('croix-h3');
croixH3.addEventListener('click', masquerCadreH3);

function masquerCadreH3() {
    document.getElementById('cadre-h3').style.display = 'none';
    document.getElementById('cadre-h3').style.animation = 'fade-out 0.3s forwards';
    blurrHypo1.classList.remove('blurr__hypo');
    blurrHypo2.classList.remove('blurr__hypo');
    blurrHypo3.classList.remove('blurr__hypo');
  }

const paragraphs = document.querySelectorAll('.p--anim');

paragraphs.forEach((element) => {
    gsap.fromTo(element, {
        opacity: 0,
        y: 25
    }, {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: element,
            start: 'top 80%', 
            end: 'bottom 20%', 
            toggleClass: 'active', 
            
        }
    });
});

