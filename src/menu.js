import { mainContent } from './index';


// import '../src/index';
// export default menuPage = () => { 
//     let menuPageContentDiv = document.createElement('div');
    
//     menuPageContentDiv.classList.add('menu-page-content-div-container');

// }  

// when button is clicked, remove the main content, 
// remove styles 
// keep header content and footer content, 
// make menu container, apply styles to container, rectangle shape 
// make div or multiple divs, add content, append to container. 



export const menuPageModule = () => { 
    const menuPage = () => { 
       let div = document.createElement('div');
       div.textContent = 'Helllllloo';
       div.style.color = 'white'; 

       mainContentTextContainer.append(div);
       document.body.append(mainContentTextContainer);
    }
}

// export function menuPage() { 
//     let div = document.createElement('div');
//         div.textContent = 'Helllllloo';
//         div.style.color = 'white'; 

//         mainContentTextContainer.append(div);
    
// }


// const menuPageModule = (() => { 
//     // remove main content styles to make way for new menu 
//     const menuPage = () => { 
//         console.log('hello');
//         let menuPageContainer = document.createElement('container');

//         let menuPageContentDiv = document.createElement('div');

//         menuPageContentDiv.textContent = 'Menu:';

//         menuPageContentDiv.classList.add('menu-page-content-div-container'); 

//         document.body.append(menuPageContentDiv);

//         // call the header function within first module, to print the header, 

//         // each function is creating a new div,
//         // I think you want a container, apply the background styles, 
//         // then append the menu items to the div, then attach the div to the container