import '../style.css';
import '../burger-picture-1.jpg';
import '../burger-picture-2.jpg';
import '../burger-img-4.jpg'; 

import  { menuPageModule } from './menu'; 

// export default loadPage from './index';

// export { loadPage, mainContent } from './index';
 
// global variable, which holds the result of which button was clicked on 
// if that particular button was clicked, update var 
// then call the module/import the module that handles the code 
// for the button. 

// header module seperate 


let moduleVariable 


const headerContent = (() => {  
let header = () => { 

  // serves as container
let contentDiv = document.getElementById('content'); 

// contentDiv.classList.add('header-container-styles');

let header = document.createElement('div'); 

let subheader = document.createElement('p');

subheader.textContent = 'The Best In The City!'; 

subheader.classList.add('subheader');

header.textContent = "Alec's Burger House";

header.classList.add('header-content');

let headerBtnContainer = document.createElement('container'); 

let homeBtn = document.createElement('button'); 

homeBtn.addEventListener('click', () => {
   moduleVariable = 'home';
   determinePage();
   return 
})

// add event listener to home btn,
// once clicked, set the module variable equal to the button that was clicked 
// if home btn is clicked, mod variable === home module 

let menuBtn = document.createElement('button');

// add event listener, once clicked,
// set the module variable to the button that was clicked, 
// import the correct file/module that was clicked into index.js 

menuBtn.addEventListener('click', () => { 
  moduleVariable = 'menu';
  determinePage();
  return
})

let contactBtn = document.createElement('button');

// add event listener, once clicked,
// set the module variable to the button that was clicked, 

contactBtn.addEventListener('click', () => { 
  moduleVariable = 'contact';
  determinePage();
  return
})

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
return { 
  header,
}
})(); 



 export const loadPage = (() => { 
  // old header content, header within its own module 

// let headerContent = () => { 

//   // serves as container
// let contentDiv = document.getElementById('content'); 

// contentDiv.classList.add('header-container-styles');

// let header = document.createElement('div'); 

// let subheader = document.createElement('p');

// subheader.textContent = 'The Best In The City!'; 

// subheader.classList.add('subheader');

// header.textContent = "Alec's Burger House";

// header.classList.add('header-content');

// let headerBtnContainer = document.createElement('container'); 

// let homeBtn = document.createElement('button'); 

// homeBtn.addEventListener('click', (e) => {
//    moduleVariable = loadPage.headerContent();
// })

// // add event listener to home btn,
// // once clicked, set the module variable equal to the button that was clicked 
// // if home btn is clicked, mod variable === home module 

// let menuBtn = document.createElement('button');

// // add event listener, once clicked,
// // set the module variable to the button that was clicked, 
// // import the correct file/module that was clicked into index.js 

// let contactBtn = document.createElement('button');

// // add event listener, once clicked,
// // set the module variable to the button that was clicked, 

// headerBtnContainer.appendChild(homeBtn);

// headerBtnContainer.appendChild(menuBtn);

// headerBtnContainer.appendChild(contactBtn);

// headerBtnContainer.classList.add('header-btn-container');

// homeBtn.textContent = 'Home';

// homeBtn.classList.add('header-btn');

// menuBtn.textContent = 'Menu';

// menuBtn.classList.add('header-btn');

// contactBtn.textContent = 'Contact';

// contactBtn.classList.add('header-btn');

// header.appendChild(subheader);

// header.appendChild(headerBtnContainer);

// contentDiv.appendChild(header);

// document.body.appendChild(contentDiv); 
// } 

let mainContent = () => { 
let mainContentContainer = document.getElementById('content'); 

let mainContentTextContainer = document.createElement('container'); 

 mainContentTextContainer.classList.add('main-content-center-text-container');

 let mainContentText = document.createElement('p');

 mainContentText.classList.add('text-over-pictures');

 mainContentText.innerHTML = 'Experience the Tradiation! <br><br> Since 1994 we have been proudly serving the community. <br><br> Our mission is to make the best burgers and a memorable dining experience. <br><br> We honor our roots and tradition and cant wait to serve you!' ;

  const myImg1 = new Image();

  const myImg2 = new Image();

  const myImg3 = new Image();

  myImg1.classList.add('main-content-background-img-1'); 

  myImg2.classList.add('main-content-background-img-2');

  myImg3.classList.add('main-content-background-img-3');

  myImg1.src = '../burger-fries-1-small.jpg';

  myImg2.src = '../burger-picture-2.jpg';

  myImg3.src = '../burger-img-4.jpg';

  mainContentTextContainer.append(mainContentText);
  
  mainContentTextContainer.append(myImg1);

  mainContentTextContainer.append(myImg2);

  mainContentTextContainer.append(myImg3); 

  mainContentContainer.append(mainContentTextContainer);

  document.body.append(mainContentContainer);

} 

let footerContent = () => { 
  
  // let footerContainer = document.createElement('container'); 

  let mainDivContainer = document.getElementById('content');

  // footerContainer.classList.add('footer-container');

  let footerInfoDivAddress = document.createElement('div');

  footerInfoDivAddress.classList.add('footer-info-styles');

  let footerInfoDivPhone = document.createElement('div');

  let footerPhoneNum = document.createElement('p');

  footerInfoDivAddress.textContent = 'Address: 1234 South Broad Street, Philadelphia, PA';

  footerPhoneNum.textContent = 'Phone: 123-123-123';

  
  // footerContainer.append(footerInfoDivAddress);

  footerInfoDivAddress.append(footerPhoneNum);

  // mainDivContainer.append(footerPhoneNum);
  
  mainDivContainer.append(footerInfoDivAddress);

  document.body.append(mainDivContainer);

}

  return { 
    // headerContent,
    mainContent,
    footerContent,
  }
})(); 


// loadPage.headerContent();
// loadPage.mainContent();
// loadPage.footerContent();  

// at this point, I want to test that 
// if I click on any of the buttons, it will render appropriately 
// at least render the header and footer, and everything for home page 

// it is appending everything on the bottom of the page, below the footer, 
// not sure why, it has be an issue with how I'm appending. 
// I just want that during my testing, if I click on the buttons, it will 
// render the header, and the footer, remove the main content as well, at once. 
// right now it's still appending the header below the footer, it's not 
// re-appending to the container, 
// the main content container, 

function determinePage () { 
  let mainContentDiv = document.getElementById('content');

  while(mainContentDiv.firstChild) { 
    mainContentDiv.firstChild.remove();
  }

  if (moduleVariable === 'home') {
    // you have to delete previous styles in the content div. 
    // mainContentDiv.style.remove(); 
    headerContent.header();
    loadPage.mainContent();
    loadPage.footerContent(); 

} else if (moduleVariable === 'menu') { 
  // menu module 
   headerContent.header();  // render header 
  //  menuPageModule; trying to call menu module, so code can run and fill in.
  menuPageModule.menuPage();
   // call the menu page, run code inside 
  //  loadPage.mainContent.remove();
   loadPage.footerContent();  // render footer 

} else if (moduleVariable === 'contact') { 
   headerContent.header(); 
  //  div.textContent = 'Hellllllooooo!';
  //  div.style.color = 'white';
  //  document.body.append(div);
   loadPage.footerContent();
  // call '../src/contact' to run its module // render with new module
} else { 
  headerContent.header();
  loadPage.mainContent();
  loadPage.footerContent();
}
}


determinePage();

// event listener when the menu button is pressed, 

// clean up DOM styling into own css class/file 

// then start making the menu page syntax logic, 

// event listeners for each button, once clicked, call and run this function 

// set up your restaurant site to use tabbed browsing to access the Contact and Menu pages.

// Put the contents of each ‘tab’ inside of its own module. 

// Each module will export a function that creates a div element, 

// adds the appropriate content and styles to that element and then appends it to the DOM.

// grab the button element that was created, add an event listener to that button 

// once clicked menu will be generated, use same background, 

// content div with id, container which will append text/content

// container, give it a width, height, make it rectangle, slight border radius 

// apply flex properties to container, 

// main content will be p element, or multiple p elements, 

// those elements will be appended to the container, then append that to the content div






// contact btn event listener, click, make content div w ID, 

// make container which will append content, including address, phone, 

// map which 


