
import { loadPage }  from "./index"; 


export const menuPageModule = () => { 
    
    
    // let container = document.getElementsByClassName('main-content-center-text-container')[0];
    // while(container.firstChild) { 
    //         container.firstChild.remove();
    //       }
        // let container = document.getElementById('content'); 

    let div = document.createElement('div'); 
    
    let container = document.createElement('container');
    
    container.classList.add('menu-container');

    div.style.color = 'white';

    div.textContent = 'hey how are you'; 

    container.appendChild(div); 

    document.body.append(container);
    
}  

// menuPageModule();


// possibly use a different container, append menu content to that, 
// see if you can grab the main content container, remove the styles, 
// then apply content 

// or 
// just make a new container, add properties and append things to that 
// new container. 
