const words = [
"Web Developer",
"Python Programmer",
"Frontend Developer",
"UI Designer"
];

let index = 0;
let char = 0;
let current = "";
let isDeleting = false;

function type() {

current = words[index];

if(!isDeleting){

document.querySelector(".typing").textContent =
current.substring(0,char++);

if(char>current.length){
isDeleting=true;
setTimeout(type,1200);
return;
}

}else{

document.querySelector(".typing").textContent =
current.substring(0,char--);

if(char==0){
isDeleting=false;
index++;
if(index==words.length){
index=0;
}
}

}

setTimeout(type,isDeleting?60:120);

}

type();

const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-100){

card.style.opacity="1";

card.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition=".8s";

});
