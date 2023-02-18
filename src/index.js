import '../style.css';
import '../burger-picture-1.jpg';
import '../burger-picture-2.jpg';
import '../burger-img-4.jpg';

const loadPage = (() => { 
    
let headerContent = () => { 

  // serves as container
let contentDiv = document.getElementById('content'); 

contentDiv.classList.add('header-container-styles');

let header = document.createElement('div'); 

let subheader = document.createElement('p');

subheader.textContent = 'The Best In The City!'; 

subheader.classList.add('subheader');

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

header.appendChild(subheader);

header.appendChild(headerBtnContainer);

contentDiv.appendChild(header);

document.body.appendChild(contentDiv); 
} 

let mainContent = () => { 
let mainContentContainer = document.getElementById('content'); 

let mainContentTextContainer = document.createElement('container'); 

 mainContentTextContainer.classList.add('main-content-center-text-container');

 let mainContentText = document.createElement('p');

//  let lineBreak = document.createElement('br');

 mainContentText.classList.add('text-over-pictures');

 mainContentText.innerHTML = 'Experience the Tradiation! <br><br> Since 1994 we have been proudly serving the community. <br><br> Our mission is to make the best burgers and a memorable dining experience. <br><br> We honor our roots and tradition and cant wait to serve you!' ;

  const myImg1 = new Image();

  const myImg2 = new Image();

  const myImg3 = new Image();

  myImg1.classList.add('main-content-background-img-1'); 

  myImg2.classList.add('main-content-background-img-2');

  myImg3.classList.add('main-content-background-img-3');

  myImg1.src = '../burger-fries-1-small.jpg';

  myImg1.style.width = "33.3%";

  myImg1.style.height = '100%';

  myImg1.style.color = 'white';

  myImg1.textContent = 'asdfasdfasdf';

  myImg2.src = '../burger-picture-2.jpg';

  myImg2.style.width = '33.3%';

  myImg2.style.overflow = 'hidden';

  myImg2.style.verticalAlign = 'top';

  myImg3.src = '../burger-img-4.jpg';

  myImg3.style.width = '33.3%';

  myImg3.style.verticalAlign = 'top';

  mainContentTextContainer.append(mainContentText);

  // mainContentTextContainer.append(mainContentSubtext);
  
  mainContentTextContainer.append(myImg1);

  mainContentTextContainer.append(myImg2);

  mainContentTextContainer.append(myImg3); 

//  document.append(mainContentText);

  // mainContentContainer.append(overContainer);
  
  // document.body.append(myImg1);

  // document.body.append(myImg2);

  // document.body.append(myImg3); 

  mainContentContainer.append(mainContentTextContainer);

  document.body.append(mainContentContainer);

} 

let footerContent = () => { 
  
  let footerContainer = document.createElement('container');

  footerContainer.classList.add('footer-container');

  let footerInfoDivAddress = document.createElement('div');

  footerInfoDivAddress.classList.add('footer-info-styles');

  let footerInfoDivPhone = document.createElement('div');

  let footerPhoneNum = document.createElement('p');

  footerInfoDivAddress.textContent = 'Address: 1234 South Broad Street, Philadelphia, PA';

  footerPhoneNum.textContent = 'Phone: 666-666-666';

  footerInfoDivAddress.append(footerPhoneNum);

  footerContainer.append(footerInfoDivAddress);

  footerContainer.style.fontSize = '2rem';

  document.body.append(footerContainer);

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
