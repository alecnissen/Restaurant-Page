import { loadPage, mainContent } from './index';

console.log(mainContent);

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