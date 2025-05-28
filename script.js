console.log("App Started...");
let count=0;

let plus=document.querySelector('.plus');

let minus=document.querySelector('.minus');

let data=document.querySelector('.count');

data.innerText=count;

plus.addEventListener('click',()=>{
    console.log(`'+' Clicked`);
    count++;
    data.innerText=count;
})

minus.addEventListener('click',()=>{
    console.log(`'-' Clicked`);
    count--;
    data.innerText=count;
})