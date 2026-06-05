/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME TEXT CIRCULAR ===============*/

const homeText = document.getElementById('home-text'),  
  letters = homeText.textContent.trim().split(''), //here i'm spliting the words by spaces
  angleStep = 360/letters.length //angle for each character ; 
  homeText.textContent = ''; 

  //now iterate through each characters : 
  letters.forEach((char,i)=>{
    const span = document.createElement('span'); // will create span for each letter iteration
  span.textContent = char; //inserting each characters in to the span
  span.style.transform = `rotate(${i * angleStep}deg)`; //rotating each letters based on it's index 
  homeText.appendChild(span); //appends the span to the main container
  


  })

/*=============== HOME TYPED JS ===============*/


/*=============== CHANGE HEADER STYLES ===============*/


/*=============== SWIPER WORK ===============*/ 


/*=============== SERVICES ACCORDION ===============*/ 


/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/ 


/*=============== CONTACT EMAIL JS ===============*/ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== CUSTOM CURSOR ===============*/


/*=============== SCROLLREVEAL ANIMATION ===============*/
