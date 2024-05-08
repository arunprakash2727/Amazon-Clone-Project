const images = document.querySelectorAll('.header-slider ul img');
const previous = document.querySelector('.previous-btn');
const next = document.querySelector('.next-btn');

document.addEventListener('DOMContentLoaded',()=>{
    const sideNav = document.querySelector('.side-nav');
    const btn = document.getElementById('btn');
    const overlay = document.querySelector('.overlay');

    btn.addEventListener('click',()=>{
        sideNav.classList.add('open');
    })
    overlay.addEventListener('click',()=>{
        sideNav.classList.remove('open');
    })
})

let n=0;

function changeSlide(){
    for(let i=0; i<images.length; i++){
        images[i].style.display= 'none';
    }
    images[n].style.display = 'block';
}
changeSlide();

previous.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }
    else{
        n = images.length-1;
    }
    changeSlide();
})

next.addEventListener('click',(e)=>{
    if(n<images.length-1){
        n++;
    }
    else{
        n = 0;
    }
    changeSlide();
})

const scrollProducts = document.querySelectorAll('.products ul');

for(const items of scrollProducts){
    items.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        items.scrollLeft += evt.deltaY;
    });
}

const scrollProducts1 = document.querySelectorAll('.products');

for(const items of scrollProducts1){
    items.addEventListener('wheel',(e)=>{
        e.preventDefault();
        items.scrollLeft += e.deltaY;
    })
}
document.addEventListener('DOMContentLoaded', ()=> {
    const toggleBtn1 = document.getElementById('toggle-btn');
    const toggleBtn2 = document.getElementById('toggle-btn-2');
    const hidden1 = document.querySelectorAll('.hidden');
    const hidden2 = document.querySelectorAll('.hidden-2');

    const updateBtnText = (btn, hiddenItems) =>{
        const areAllHidden = Array.from(hiddenItems).every(item => item.classList.contains('hidden'));
        btn.innerHTML = areAllHidden ? 'See all <i class="fa fa-angle-down"></i>' : 'See less <i class="fa fa-angle-up"></i>';
    }

    const updateBtnText2 = (btn, hiddenItems) =>{
        const areAllHidden = Array.from(hiddenItems).every(item => item.classList.contains('hidden-2'));
        btn.innerHTML = areAllHidden ? 'See all <i class="fa fa-angle-down"></i>' : 'See less <i class="fa fa-angle-up"></i>';
    }

    const toggleHiddenItems = (btn, hiddenItems) => {
        hiddenItems.forEach(item => {
            item.classList.toggle('hidden');
        })
        updateBtnText(btn, hiddenItems);
    }

    const toggleHiddenItems2 = (btn, hiddenItems) => {
        hiddenItems.forEach(item => {
            item.classList.toggle('hidden-2');
        })
        updateBtnText2(btn, hiddenItems);
    }

    toggleBtn1.addEventListener('click', function() {
        toggleHiddenItems(toggleBtn1, hidden1);
    })

    toggleBtn2.addEventListener('click', function() {
        toggleHiddenItems2(toggleBtn2, hidden2);
    })
})