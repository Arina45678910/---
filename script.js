let myForm = document.querySelector('#myForm');
let elements = myForm.elements;
let result = document.querySelector('.result');
let btn = elements.btn;
let str = elements.str;
console.log(elements);
btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    let mas = str.value.split('');
    result.append(mas);
    console.log(mas);
})