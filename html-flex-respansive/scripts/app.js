const menuBar=document.querySelector('.fa-bars')
const menuClass=document.querySelector('.menu')
let toggleBtn=true
menuBar.addEventListener('click',()=>{
    if(toggleBtn) {
        menuClass.style.left='0';
        menuBar.classList.remove('fa-bars');
        menuBar.classList.add('fa-times');
    }else{
        menuClass.style.left='-256px';
        menuBar.classList.add('fa-bars');
        menuBar.classList.remove('fa-times'); 
    }
    
    
    toggleBtn = !toggleBtn
    
})

document.addEventListener('click', (e) => {
    if (
        menuClass.style.left === '0px' &&
        !menuClass.contains(e.target) &&
        !menuBar.contains(e.target)
    ) {
        menuClass.style.left = '-256px';
        menuBar.classList.add('fa-bars');
        menuBar.classList.remove('fa-times');
        toggleBtn = true;
    }
});