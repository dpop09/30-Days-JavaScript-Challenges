/*
This line selects all HTML elements that match the specified CSS selector 
'.controls input'. It returns a NodeList of elements, which is similar to 
an array but does not have all the array methods. Each input element inside 
a parent element with the class 'controls' will be selected.
*/
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    //dataset.sizing is a custom data attribute from the element that triggered the event
    //if dataset.sizing doesn't exist on the element, then we default to an empty string (base color)
    //'this' refers to the object that is currently executing the code, the element that received the event in this case
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

//call handleUpdate() whenever any of the nodes change values or the mouse moves with its respective divs with forEach function
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));