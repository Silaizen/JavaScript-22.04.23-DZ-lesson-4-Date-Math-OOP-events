/*1 task
function validateInput(event) {
  const input = event.target;
  const inputValue = input.value;
  const lastChar = inputValue.slice(-1); 

  if (!isNaN(lastChar)) {
      
      input.value = inputValue.slice(0, -1);
  }
}*/

/*2 task
 
function openModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'block';
}


function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
}*/

/*3 task
document.addEventListener('DOMContentLoaded', function() {
  let field = document.getElementById('football-field');
  let ball = document.getElementById('ball');

  field.addEventListener('click', function(event) {
    let fieldRect = field.getBoundingClientRect();
    let fieldWidth = field.offsetWidth;
    let fieldHeight = field.offsetHeight;
    let ballWidth = ball.offsetWidth;
    let ballHeight = ball.offsetHeight;
    let clickX = event.clientX - fieldRect.left - ballWidth / 2;
    let clickY = event.clientY - fieldRect.top - ballHeight / 2;

    if (clickX < 0) clickX = 0;
    if (clickY < 0) clickY = 0;
    if (clickX + ballWidth > fieldWidth) clickX = fieldWidth - ballWidth;
    if (clickY + ballHeight > fieldHeight) clickY = fieldHeight - ballHeight;

    ball.style.transform = `translate(${clickX}px, ${clickY}px)`;
  });
});
*/

/*4 task
let lightIndex = 0;
const lights = document.getElementsByClassName('light');

function changeLight() {
  
  for (let i = 0; i < lights.length; i++) {
    lights[i].classList.remove('active');
  }

  
  lightIndex = (lightIndex + 1) % lights.length;
  lights[lightIndex].classList.add('active');
}
*/
    
/*5 task
let selectedBook = null;

function toggleBookColor(event) {
  let clickedBook = event.target;
  if (selectedBook !== null) {
    selectedBook.classList.remove('selected');
  }
  if (selectedBook !== clickedBook) {
    clickedBook.classList.add('selected');
    selectedBook = clickedBook;
  } else {
    selectedBook = null;
  }
}
*/
   
/*6 task

const clickBtn=document.querySelector(".btn");
clickBtn.addEventListener("mouseenter",
(e=>{const t=document.querySelector(".pop-up");

t.getBoundingClientRect().y>=200?t.classList.add("hover-up"):t.classList.add("hover-down")})),
clickBtn.addEventListener("mouseleave",(e=>{const t=document.querySelector(".pop-up");
t.classList.contains("hover-up")?t.classList.remove("hover-up"):t.classList.contains("hover-down")&&t.classList.remove("hover-down")}));*/

/*7 task
for(let li of three.querySelectorAll('li')){
  let span = document.createElement('span')
  span.classList.add('show');
  li.prepend(span);
  span.append(span.nextSibling)
 }
three.onclick = e =>{
if(event.target.tagName != 'SPAN') return;
let childrenContainer = event.target.parentNode.querySelector('ul');

if(!childrenContainer) return;
childrenContainer.hidden = !childrenContainer.hidden;
if (childrenContainer.hidden){
  event.target.classList.add('hide');
  event.target.classList.remove('show');
}
else{
  event.target.classList.add('show');
  event.target.classList.remove('hide');
}
}
*/

/*8 task
function startResize(event) {
  if (event.button === 2) { 
    document.onmousemove = resize;
    document.onmouseup = stopResize;
  }
}

function resize(event) {
  const block = document.querySelector('.text-block');
  block.style.width = `${event.clientX - block.offsetLeft}px`;
  block.style.height = `${event.clientY - block.offsetTop}px`;
}

function stopResize() {
  document.onmousemove = null;
  document.onmouseup = null;
}
*/