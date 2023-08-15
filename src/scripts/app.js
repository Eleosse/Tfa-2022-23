import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
var ptoggleUser = document.querySelector(".legende__user--grid");
if(cadreUser){
    cadreUser.addEventListener("click", afficherCadre);
}

function afficherCadre() {
    ptoggleUser.classList.toggle('p__toggle');

    // Récupérer le pseudo-élément ::before
    var pseudoElementBefore = window.getComputedStyle(cadreUser, '::before');

    // Vérifier le contenu actuel et le changer
    if (pseudoElementBefore.content === '"→ "') {
        cadreUser.style.setProperty('--arrow-content', '"↓ "');
    } else {
        cadreUser.style.setProperty('--arrow-content', '"→ "');
    }


}



var blurrHypo1 = document.querySelector('.hypo__para--1')
var blurrHypo2 = document.querySelector('.hypo__para--2')
var blurrHypo3 = document.querySelector('.hypo__para--3')
/* hypo1 btn */
var cadreH1 = document.querySelector(".hypo__link--1");
if(cadreH1){
    cadreH1.addEventListener("click", afficherCadreH1);
}
  
function afficherCadreH1() {
    document.getElementById('cadre-h1').style.display = 'block';
    document.getElementById('cadre-h1').style.animation = 'fade-in 0.3s forwards';
    blurrHypo1.classList.add('blurr__hypo');
    blurrHypo2.classList.add('blurr__hypo');
    blurrHypo3.classList.add('blurr__hypo');
}

var croixH1 =  document.getElementById('croix-h1');
if(croixH1){
    croixH1.addEventListener('click', masquerCadreH1);
}

function masquerCadreH1() {
    document.getElementById('cadre-h1').style.display = 'none';
    document.getElementById('cadre-h1').style.animation = 'fade-out 0.3s forwards';
    blurrHypo1.classList.remove('blurr__hypo');
    blurrHypo2.classList.remove('blurr__hypo');
    blurrHypo3.classList.remove('blurr__hypo');
  }

/* hypo2 btn */
var cadreH2 = document.querySelector(".hypo__link--2");
if(cadreH2){
    cadreH2.addEventListener("click", afficherCadreH2);
}
  
function afficherCadreH2() {
    document.getElementById('cadre-h2').style.display = 'block';
    document.getElementById('cadre-h2').style.animation = 'fade-in 0.3s forwards';
    blurrHypo1.classList.add('blurr__hypo');
    blurrHypo2.classList.add('blurr__hypo');
    blurrHypo3.classList.add('blurr__hypo');
}

var croixH2 =  document.getElementById('croix-h2');
if(croixH2){
    croixH2.addEventListener('click', masquerCadreH2);
}


function masquerCadreH2() {
    document.getElementById('cadre-h2').style.display = 'none';
    document.getElementById('cadre-h2').style.animation = 'fade-out 0.3s forwards';
    blurrHypo1.classList.remove('blurr__hypo');
    blurrHypo2.classList.remove('blurr__hypo');
    blurrHypo3.classList.remove('blurr__hypo');
  }

/* hypo3 btn */
var cadreH3 = document.querySelector(".hypo__link--3");
if(cadreH3){
    cadreH3.addEventListener("click", afficherCadreH3);
}
  
function afficherCadreH3() {
    document.getElementById('cadre-h3').style.display = 'block';
    document.getElementById('cadre-h3').style.animation = 'fade-in 0.3s forwards';
    blurrHypo1.classList.add('blurr__hypo');
    blurrHypo2.classList.add('blurr__hypo');
    blurrHypo3.classList.add('blurr__hypo');
}

var croixH3 =  document.getElementById('croix-h3');
if(croixH3){
    croixH3.addEventListener('click', masquerCadreH3);
}

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


/* icone rencontre */
const images = gsap.utils.toArray('.icone__rencontre');
const timeline = gsap.timeline({ paused: true });

images.forEach((image, index) => {
  timeline.fromTo(image, { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 1 }, index * 0.2);
});


const startAnimation = () => {
  if (!timeline.isActive()) {
    timeline.restart();
  }
};


gsap.registerPlugin(ScrollTrigger);
images.forEach((image) => {
  ScrollTrigger.create({
    trigger: image,
    start: 'top 80%', 
    onEnter: startAnimation,
    once: true 
  });
});
