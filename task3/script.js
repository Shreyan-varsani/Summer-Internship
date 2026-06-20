const button =
document.querySelector("button");

button.addEventListener(
"click",
function(){

    document
    .getElementById("menu")
    .scrollIntoView({
        behavior:"smooth"
    });

});