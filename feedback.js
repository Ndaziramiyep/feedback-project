const ratingEls=document.querySelectorAll(".selection");
const btnEl=document.getElementById("btn");
const containerEl=document.querySelector(".feedback");


let selectedRating=" ";

ratingEls.forEach((ratingEl)=>{
   ratingEl.addEventListener("click",
   (event)=>{
       removeActive();
       selectedRating=event.target.innerText;
       event.target.classList.add("active");
       });
});

btnEl.addEventListener("click",()=>{
 if(selectedRating !==" "){
containerEl.innerHTML=`
<strong class="title"> Thank you!</strong>
<br>
<br>
<strong> Feedback Status:<span>${selectedRating}</span></strong>
<p>we'll use your feedback to improve our customer support.</p>

`;
 }
});

function removeActive(){
ratingEls.forEach((ratingEl)=>{
   ratingEl.classList.remove("active");
});
}