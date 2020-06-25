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
let last_id = "";

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//Build dynamic navbar based on current sections
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

// This Method removes old active status from nav items to add new one when click or scroll events 
const remove_active = () => {
    let active_list_item = document.querySelector('#navbar__list li.active');
    if(active_list_item){
        active_list_item.classList.remove('active');
    }
}

// This Method removes old active status from section to add new one when click or scroll events 
const remove_active_section = () => {
    let active_section =  document.querySelector('section.your-active-class');
    if(active_section){
        active_section.classList.remove('your-active-class');
    }
}

// This method scrolls to specific section when navbar item clicked
const scroll_to = () => {
    let navbar = document.getElementById('navbar__list');
    navbar.addEventListener('click', function(ev){
        if(ev.target.tagName == 'LI'){
            remove_active();
            let section = document.querySelector(`[data-nav='${ev.target.getAttribute('id')}']`);
            section.scrollIntoView({behavior: 'smooth'});
            remove_active_section();
            section.classList.add('your-active-class');
            const id = ev.target.id;
            let list_item = document.getElementById(id);
            list_item.classList.add('active');
        }
    });
};

// This method highlight the current active section and navbar item
const scroll_listener = () =>{
    window.addEventListener('scroll', function(){
        const scroll_items = document.querySelectorAll('section');
        const nav_bar = document.getElementById("navbar__list");
        const nav_size = nav_bar.getBoundingClientRect();
        const nav_height = nav_size.height + 1;
        const cur_window_height = window.pageYOffset;
        scroll_items.forEach((currentValue) => {
            const sec_size = currentValue.getBoundingClientRect();
            if(sec_size.top < cur_window_height){
                const sec_id = currentValue.getAttribute('data-nav');
                if(sec_id != last_id){
                    remove_active();
                    remove_active_section();
                    let list_item = document.getElementById(sec_id);
                    list_item.classList.add('active');
                    last_id = sec_id;
                    currentValue.classList.add('your-active-class');
                }
            }
        });
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
scroll_listener();

// Scroll to anchor ID using scrollTO event
scroll_to();

/**
 * End Main Functions
 * 
*/



