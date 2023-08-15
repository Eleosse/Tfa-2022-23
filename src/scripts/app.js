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
