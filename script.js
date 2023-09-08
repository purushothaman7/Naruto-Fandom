const mangatxt=document.getElementById("manga1");
mangatxt.style.display="none";
const sasuketxt=document.getElementById("sasuketxt")
const carouseltxt=document.getElementById("carouseltxt");
const abouttxt=document.getElementById("abouttxt");
const 
narutotxt=document.getElementById("narutotxt");
narutotxt.style.display="none";
sasuketxt.style.display="none";
kakatxt.style.display="none";
hinatatxt.style.display="none";
kakatxt.style.display="none";
const mangabtn=document.getElementById("mangabtn");

mangabtn.addEventListener("click",function(){
  carouseltxt.style.display="none";
  abouttxt.style.display="none";
  mangatxt.style.display="block";
  sasuketxt.style.display="none";
  narutotxt.style.display="none";
  hinatatxt.style.display="none";
  kakatxt.style.display="none";
})

const narutobtn=document.getElementById("narutobtn");
narutobtn.addEventListener("click",function(){
  carouseltxt.style.display="none";
  abouttxt.style.display="none";
  mangatxt.style.display="none";
 narutotxt.style.display="block";
 sasuketxt.style.display="none";
 hinatatxt.style.display="none";
 kakatxt.style.display="none";
})
const sasukebtn=document.getElementById("sasukebtn");
sasukebtn.addEventListener("click",function(){
  
  carouseltxt.style.display="none";
  abouttxt.style.display="none";
  mangatxt.style.display="none";
  narutotxt.style.display="none";
  sasuketxt.style.display="block";
  hinatatxt.style.display="none";
  kakatxt.style.display="none";
})
const kakabtn=document.getElementById("kakabtn");
kakabtn.addEventListener("click",function(){
  
  carouseltxt.style.display="none";
  abouttxt.style.display="none";
  mangatxt.style.display="none";
  narutotxt.style.display="none";
  kakatxt.style.display="block";
  sasuketxt.style.display="none";
  hinatatxt.style.display="none";
})

const hinatabtn=document.getElementById("hinatabtn");
hinatabtn.addEventListener("click",function(){
  
  carouseltxt.style.display="none";
  abouttxt.style.display="none";
  mangatxt.style.display="none";
  narutotxt.style.display="none";
  hinatatxt.style.display="block";
  sasuketxt.style.display="none";
  kakatxt.style.display="none";
})

