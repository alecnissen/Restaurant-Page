// console.log('Hello');
// console.log('Hey'); 

// // function that will load the page, this module we can call it 
// // by the name 
// // I need to make a function which creates all HTML elements 
// // USING THE DOM, I will put this code inside a module 
// // the module will be called loadPage, it will contain 
// const loadPage { 
    // container to append elements, 
    // // each part of the page should be its own method 
    // header, main, footer, 
    // first start with header, make an element, append, load, then go from there, 
// } 

// ok I can append elements to the DOM, now I need to write a function within a module 
// now I need to write a function within a module /
// make a module 

// start with a function that only loads header, 
// each section have its own module 

// have to append items to the content div 

// I want to put the buttons inside the div, 

const loadPage = (() => { 
    
let header = () => { 

let container = document.createElement('container'); 

// container.style.display = 'flex';

// container.style.flexDirection = 'column';

let header = document.createElement('div');

header.textContent = "Alec's Burger House";

header.style.fontSize = '3rem';

// header.style.display = 'flex';

// header.style.flexDirection = 'row';

header.style.textAlign = 'center';

header.style.height = '4em';

header.style.backgroundColor = 'red';

let headerBtnContainer = document.createElement('container'); 

let homeBtn = document.createElement('button');

let menuBtn = document.createElement('button');

let contactBtn = document.createElement('button');

headerBtnContainer.appendChild(homeBtn);

headerBtnContainer.appendChild(menuBtn);

headerBtnContainer.appendChild(contactBtn);

// headerBtnContainer.style.display = 'flex';

// headerBtnContainer.style.flexDirection = 'row';

// headerBtnContainer.style.justifyContent = 'center';

homeBtn.textContent = 'Home';

menuBtn.textContent = 'Menu';

contactBtn.textContent = 'Contact';

// header.appendChild(headerBtnContainer);

container.appendChild(headerBtnContainer);

container.appendChild(header);

header.appendChild(homeBtn);

header.appendChild(menuBtn);

header.appendChild(contactBtn);

document.body.appendChild(container); 
} 

  return { 
    header,
  }
})(); 


loadPage.header();

// function loadPage() { 
//     let container = document.createElement('container'); 

// let element = document.createElement('div');

// element.textContent = 'Alec/s house of burgers'

// container.appendChild(element);

// document.body.appendChild(container); 
// } 

// loadPage();

// begin DOM content, 
// let container = document.createElement('container'); 

// let element = document.createElement('div');

// element.textContent = 'Alec/s house of burgers'

// container.appendChild(element);

// document.body.appendChild(container); 

// document.append(container);

// console.log(container);

// function loadPage () { 
//     let container = document.createElement('container');
//     let element = document.createElement('div');

// } 

// loadPage();
