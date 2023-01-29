const changeColorBtn = document.querySelector('.change-color');
const spanColorNameRef = document.querySelector('.color');
const bodyRef = document.body;

// spanColorNameRef.textContent = window.getComputedStyle(spanColorNameRef).backgroundColor;

changeColorBtn.addEventListener('click', ()=>{
  spanColorNameRef.textContent = getRandomHexColor();
  bodyRef.style.backgroundColor = spanColorNameRef.textContent;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}