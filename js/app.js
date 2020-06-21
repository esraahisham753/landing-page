/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const in_view_port = (el) => {
    let pos = el.getBoundingClientRect();
    return pos.top > 0;
};

const build_nav = () => {
    let docFrag = document.createDocumentFragment();
    const section_list = document.querySelectorAll('section');
    section_list.forEach(function(currentValue, currentIndex, listObj) { 
        const heading = currentValue.querySelector('h2').textContent;
        let nav_item = document.createElement('li');
        nav_item.classList.add('menu__link');
        nav_item.setAttribute('id', currentValue.getAttribute('data-nav'));
        nav_item.textContent = heading;
        docFrag.appendChild(nav_item);
      });
    let nav_list = document.getElementById('navbar__list');
    nav_list.appendChild(docFrag);
};

const remove_active = () => {
    const nav_list = document.getElementById('navbar__list');
    let nav_items = nav_list.querySelectorAll('li');
    nav_items.forEach((currentValue) => {
        currentValue.classList.remove('active');
    });
}

const scroll_to = () => {
    let navbar = document.getElementById('navbar__list');
    navbar.addEventListener('click', function(ev){
        if(ev.target.tagName == 'LI'){
            remove_active();
            let section = document.querySelector(`[data-nav='${ev.target.getAttribute('id')}']`);
            section.scrollIntoView({behavior: 'smooth'});
            const id = ev.target.id;
            let list_item = document.getElementById(id);
            list_item.classList.add('active');
        }
    });
};
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
build_nav();
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
scroll_to();

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


