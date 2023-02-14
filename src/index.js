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
    
let headerContent = () => { 

  // serves as container
let contentDiv = document.getElementById('content');

contentDiv.style.display = 'flex';

contentDiv.style.flexDirection = 'column';

// contentDiv.style.justifyContent = 'center';

// contentDiv.style.alignItems = 'center';

let header = document.createElement('div'); 

// header.classList.add('header-content');

header.textContent = "Alec's Burger House";

header.style.fontSize = '3rem';

header.classList.add('header-content');

// header.style.display = 'flex';

// header.style.justifyContent = 'flex-end';

// header.style.alignItems = 'center';

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

headerBtnContainer.classList.add('header-btn-container');

// headerBtnContainer.style.display = 'flex';

// headerBtnContainer.style.flexDirection = 'row';

// headerBtnContainer.style.justifyContent = 'center';

// headerBtnContainer.style.alignItems = 'center';

homeBtn.textContent = 'Home';

menuBtn.textContent = 'Menu';

contactBtn.textContent = 'Contact';

// header.appendChild(headerBtnContainer);
//
contentDiv.appendChild(header);

header.appendChild(headerBtnContainer);

document.body.appendChild(contentDiv); 
} 

  return { 
    headerContent,
  }
})(); 


loadPage.headerContent();

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
