import '../style.css';
import '../burger-picture-1.jpg';
import '../burger-picture-2.jpg';

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

  const myImg1 = new Image();

  const myImg2 = new Image();

  const myImg3 = new Image();

  myImg1.src = '../burger-fries-1-small.jpg';

  myImg1.style.width = "33.3%";

  myImg1.style.height = '100%';

  myImg2.src = '../burger-picture-2.jpg';

  myImg2.style.width = '33.3%';

  myImg2.style.overflow = 'hidden';

  myImg2.style.verticalAlign = 'top';

  myImg3.src = '../burger-img-4.jpg';

  myImg3.style.width = '33.3%';

  myImg3.style.verticalAlign = 'top';
  // myImg2.style.backgroundSize = '30%';

  document.body.append(myImg1);

  document.body.append(myImg2);

  document.body.append(myImg3);

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
  // let mainContentContainer = document.getElementById('content');
  
  let footerContainer = document.createElement('container');

  footerContainer.classList.add('footer-container');

  let footerInfoDivAddress = document.createElement('div');

  footerInfoDivAddress.classList.add('footer-info-styles');

  let footerInfoDivPhone = document.createElement('div');

  let footerPhoneNum = document.createElement('p');

  // footerInfoDivAddress.style.backgroundColor = 'black';

  // footerInfoDivAddress.style.height = '200px';

  footerInfoDivAddress.textContent = 'Address: 1234 South Broad Street, Philadelphia, PA' 

  // footerInfoDivAddress.style.color = 'white';
 
  // footerInfoDivAddress.style.textAlign = 'center';

  // footerInfoDivAddress.style.lineBreak; 

  footerPhoneNum.textContent = 'Phone: 666-666-666';

  footerInfoDivAddress.append(footerPhoneNum);

  footerContainer.append(footerInfoDivAddress);

  footerContainer.style.fontSize = '2rem';

  

  // footerContainer.append(footerPhoneNum);

  document.body.append(footerContainer);

  // mainContentContainer.append(footerInfoDiv);

  // document.body.append(mainContentContainer);



}

  return { 
    headerContent,
    mainContent,
    footerContent,
  }
})(); 


loadPage.headerContent();
loadPage.mainContent();
loadPage.footerContent();

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
