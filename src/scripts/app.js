

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


var cadreUser = document.querySelector(".legende__user");
cadreUser.addEventListener("click", afficherCadre);
  
function afficherCadre() {
    document.getElementById('cadre-info').style.display = 'block';
    document.getElementById('cadre-info').style.animation = 'fade-in 0.3s forwards';

}

var croixUser =  document.getElementById('croix');
croixUser.addEventListener('click', masquerCadre);

function masquerCadre() {
    document.getElementById('cadre-info').style.display = 'none';
    document.getElementById('cadre-info').style.animation = 'fade-out 0.3s forwards';

  }