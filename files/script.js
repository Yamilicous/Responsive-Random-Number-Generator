const countlabel= document.getElementById(`counter`);
const reset= document.getElementById(`reset`);
const randomize= document.getElementById(`random`);
let count=0;

reset.onclick=function(){
    count=0;
    countlabel.textContent=count;
}

randomize.onclick=function(){
    count=Math.floor(Math.random()*100);
    countlabel.textContent=count;
}