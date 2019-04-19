const panels = document.querySelectorAll('.panel');
const test = document.querySelector('.panel')
const toggleOpen = () =>{
    console.log('Hello')
    console.log(window)
}


panels.forEach(panel =>panel.addEventListener('click', toggleOpen));