const firstNameElement = document.querySelector('#firstName');
setTimeout(() => {
    console.log('Now calling setTimeout handler...')
    firstNameElement.value = 'James Bond';
}, 1000);
firstNameElement.setAttribute('value', 'Zdzisław');
// console.log('Now setting prop...')
firstNameElement.value = 'Czarek';
console.log("Prop: ", firstNameElement.value);
console.log("Attr: ", firstNameElement.getAttribute('value'));

firstNameElement.addEventListener('input', function (event) {
    console.log(event.target.value);
})


// data goes down
// events go up

