

// ------------------------------------
//  taking ref to html id tag class
// -----------------------------------

let p_btns=document.querySelector('.p-btns');
let img_overlay=document.querySelectorAll('.img-overlay');
let p_btn=document.querySelectorAll('.p-btn');

p_btns.addEventListener('click',(e)=>{
const p_btnclick=e.target;
p_btn.forEach((currelm)=>{currelm.classList.remove('p-btn-active')});
p_btnclick.classList.add('p-btn-active')
const btn_num=p_btnclick.dataset.btnNum;
const img_active=document.querySelectorAll(`.p-btn--${btn_num}`);
img_overlay.forEach((curelm)=>{curelm.classList.add("p-images-not-active")});
img_overlay.forEach((curelm)=>{curelm.classList.remove("p-images-not-active")});
})

let top_arrow=document.querySelector('.top-arrow');
let navbar_list=document.querySelector('.navbar-list');
top_arrow.innerHTML=`⇑`;

// const scrollbehav=()=>
// {
   
// }
top_arrow.addEventListener('click',scrollbehav=()=>{
navbar_list.scrollIntoView({behavior:'smooth'}) 
});