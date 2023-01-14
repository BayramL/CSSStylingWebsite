const box = document.getElementById("display-box");

const widthSlider = document.getElementById('box-width');
widthSlider.addEventListener('input', (e) => {
    box.style.width = e.target.value + 'px';
});

const heightSlider = document.getElementById('box-height');
heightSlider.addEventListener('input', (e) => {
    box.style.height = e.target.value + 'px';
})

const borderSlider = document.getElementById('border-width');
borderSlider.addEventListener('input', (e) => {
    box.style.borderWidth = e.target.value + 'px';
})

const borderStyle = document.getElementById('border-styles');
borderStyle.addEventListener('input', (e) => {
    box.style.borderStyle = e.target.value;
})

const alignItems = document.getElementById('align-item');
alignItems.addEventListener('input', (e) => {
    box.style.alignItems = e.target.value;
})

const justifyContent = document.getElementById('justify-content');
justifyContent.addEventListener('input', (e) => {
    box.style.justifyContent = e.target.value;
})

const fontSize = document.getElementById('font-size');
fontSize.addEventListener('input', (e) => {
    box.style.fontSize = e.target.value + 'px';
})

const backgroundColor = document.getElementById('box-color');
document.getElementById("box-color").addEventListener('input', (e) => {
    box.style.backgroundColor = e.target.value; 
})

const borderColor = document.getElementById('border-color');
document.getElementById("border-color").addEventListener('input', (e) => {
    box.style.borderColor = e.target.value; 
})

const fontColor = document.getElementById('font-color');
document.getElementById("font-color").addEventListener('input', (e) => {
    box.style.color = e.target.value; 
})
