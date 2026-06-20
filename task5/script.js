const images =
document.querySelectorAll(
".gallery img"
);

const lightbox =
document.getElementById(
"lightbox"
);

const lightboxImg =
document.getElementById(
"lightboxImg"
);

const closeBtn =
document.getElementById(
"closeBtn"
);

const prevBtn =
document.getElementById(
"prevBtn"
);

const nextBtn =
document.getElementById(
"nextBtn"
);

const counter =
document.getElementById(
"counter"
);

let currentIndex = 0;

function showImage(index){

currentIndex = index;

lightbox.style.display =
"flex";

lightboxImg.src =
images[index].src;

counter.textContent =
`${index+1} / ${images.length}`;
}

images.forEach(
(image,index)=>{

image.addEventListener(
"click",
()=>{

showImage(index);

});

});

closeBtn.addEventListener(
"click",
()=>{

lightbox.style.display =
"none";

});

nextBtn.addEventListener(
"click",
()=>{

currentIndex =
(currentIndex+1)
%
images.length;

showImage(currentIndex);

});

prevBtn.addEventListener(
"click",
()=>{

currentIndex =
(currentIndex-1+
images.length)
%
images.length;

showImage(currentIndex);

});

document
.addEventListener(
"keydown",
e=>{

if(
lightbox.style.display
=== "flex"
){

if(e.key==="ArrowRight"){

nextBtn.click();

}

if(e.key==="ArrowLeft"){

prevBtn.click();

}

if(e.key==="Escape"){

closeBtn.click();

}

}

});