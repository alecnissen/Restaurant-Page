

export default menuPage = () => { 
    let menuPageContentDiv = document.createElement('div');
    
    menuPageContentDiv.classList.add('menu-page-content-div-container');

} 

// hello, I am stuck on last step of restaurant page with switching tabs 
// right now I'm trying to develop a game-plan and pseudocode before diving deep 

// So I understand each tab/page will be it's module, home, menu, contact 

// The code in each module will create a div, then append content that div 

// right now I'm confused on the logic of switching tabs 

// I realize I will probably need event listeners on each btn 

// once button is clicked, erase previous DOM data

// however keep header and buttons so user can still navigate, 

// import header elements into that file? 

// if my buttons are being dynamically generated using the DOM, 

// how can I access them if they are inside a module, 

// should they be written inside HTML, 

// very confused on logic to switch tabs 