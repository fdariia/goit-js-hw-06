const inputSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

textRef.style.fontSize = inputSizeControlRef.value + 'px';

inputSizeControlRef.addEventListener('input', onChangeText);

function onChangeText(){
    textRef.style.fontSize = inputSizeControlRef.value + 'px';
}
