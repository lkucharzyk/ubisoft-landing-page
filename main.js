

$(document).ready(function(){
    const slickPrev = document.querySelectorAll('.slick-prev'),
    slickNext = document.querySelectorAll('.slick-next');

    slickNext.forEach(btn=>{
        btn.innerHTML ='<i class="fas fa-chevron-right"></i>';
    })
    slickPrev.forEach(btn=>{
        btn.innerHTML ='<i class="fas fa-chevron-left"></i>';
    })
});
const mainNav = document.querySelector('#main-nav').querySelector('ul');
const mainNavI = mainNav.children;

Array.from(mainNavI).forEach(item => {
    item.addEventListener('mouseenter', showSubMenu);
});

function showSubMenu(e){
    e.target.classList.add('menu-item-selected');
    e.target.querySelector('nav').classList.remove("hidden");
    
    e.target.addEventListener('mouseleave', hideSubMenu)
}
function hideSubMenu(e){
    e.target.classList.remove('menu-item-selected')
    e.target.querySelector('nav').classList.add("hidden");
}