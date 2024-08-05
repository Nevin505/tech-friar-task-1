const navBarMenuItems=document.getElementsByClassName('navbar-menu')[0];

const hamburgerMenu=document.getElementsByClassName('hamburger-menu')[0];


hamburgerMenu.addEventListener('click',()=>{
navBarMenuItems.classList.toggle('activeElement')
console.log("Clicked");
})
