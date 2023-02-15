import '../style.css';
import '../burger-picture-1.jpg';

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

let mainContent = () => { 
 let mainContentContainer = document.getElementById('content'); 

  const myImg = new Image();

  myImg.src = '../burger-picture-1.jpg';

  document.body.append(myImg);

//  mainContentContainer.append(imgDiv);
  // insert an img here, 
  // make another div to append content, then append that content to 
  // main #contentdiv???
  // append img to content container 
  // place div with description text over top of background img
} 

let footerContent = () => { 
  // grab content div 
  // container to hold text, 
  // text with address and contact info included in footer 
  // append to div then append that #contentdiv 
}

  return { 
    headerContent,
    mainContent,
    footerContent,
  }
})(); 


loadPage.headerContent();
loadPage.mainContent();

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
