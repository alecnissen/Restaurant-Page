
import { loadPage } from "./index"; 

export const menuPageModule = () => { 
    let div = document.createElement('div'); 
    // let container = document.createElement('container');
    
    let container = document.getElementsByClassName('main-content-center-text-container');

    div.style.color = 'white'; 

    div.textContent = 'yoyoy'; 

    // container.append(div);

    // console.log(container);

    document.body.append(div);
    
}
