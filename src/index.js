import './style.css';

const loadPage = (() => { 
    
let headerContent = () => { 

  // serves as container
let contentDiv = document.getElementById('content'); 

contentDiv.classList.add('header-container-styles');

let header = document.createElement('div'); 

header.textContent = "Alec's Burger House";

header.classList.add('header-content');

let headerBtnContainer = document.createElement('container'); 

let homeBtn = document.createElement('button');

let menuBtn = document.createElement('button');

let contactBtn = document.createElement('button');

headerBtnContainer.appendChild(homeBtn);

headerBtnContainer.appendChild(menuBtn);

headerBtnContainer.appendChild(contactBtn);

headerBtnContainer.classList.add('header-btn-container');

homeBtn.textContent = 'Home';

homeBtn.classList.add('header-btn');

menuBtn.textContent = 'Menu';

menuBtn.classList.add('header-btn');

contactBtn.textContent = 'Contact';

contactBtn.classList.add('header-btn');

header.appendChild(headerBtnContainer);

contentDiv.appendChild(header);

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
