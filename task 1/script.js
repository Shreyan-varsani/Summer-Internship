const textElement =
document.getElementById("typing");

const roles = [

"Full Stack Java Developer",

"MERN Stack Enthusiast",

"Problem Solver",

"Frontend Developer"

];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

const currentRole =
roles[roleIndex];

if(!deleting){

textElement.textContent =
currentRole.substring(
0,
charIndex + 1
);

charIndex++;

if(charIndex === currentRole.length){

deleting = true;

setTimeout(
typeEffect,
1200
);

return;
}

}

else{

textElement.textContent =
currentRole.substring(
0,
charIndex - 1
);

charIndex--;

if(charIndex === 0){

deleting = false;

roleIndex++;

if(roleIndex >= roles.length){

roleIndex = 0;
}

}

}

setTimeout(
typeEffect,
deleting ? 50 : 100
);

}

typeEffect();

const toggle =
document.querySelector(
".theme-toggle"
);

toggle.addEventListener(
"click",
function(){

document.body
.classList.toggle(
"light"
);

const icon =
this.querySelector("i");

if(
document.body
.classList.contains(
"light"
)
){

icon.className =
"fas fa-sun";

}
else{

icon.className =
"fas fa-moon";

}

}
);

const contactForm =
document.querySelector(
"form"
);

contactForm.addEventListener(
"submit",
function(e){

e.preventDefault();

alert(
"Message Sent Successfully!"
);

this.reset();

}
);

const cards =
document.querySelectorAll(
".card"
);

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(
entry.isIntersecting
){

entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";

}

});

}

);

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform=
"translateY(40px)";
card.style.transition=
".6s ease";

observer.observe(card);

});