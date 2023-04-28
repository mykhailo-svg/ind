let lazyImg = document.querySelectorAll('section[data-bg]');

console.log(lazyImg);
const windowHeight = document.documentElement.clientHeight;

let lazyImagesPositions = [];

if(lazyImg.length>0){
    lazyImg.forEach(img =>{
        if(img.dataset.bg){
            lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
            lazyScrollCheck();
        }
    })
}

console.log(lazyImg[0]);

function lazyScrollCheck() {
    let imgIndex = lazyImagesPositions.findIndex(
        item => pageYOffset >item - windowHeight * 1.3
    );
    if (imgIndex >= 0) {
        
            lazyImg[imgIndex].setAttribute("style", lazyImg[imgIndex].dataset.bg);
            lazyImg[imgIndex].removeAttribute('data-bg');
            lazyImg[imgIndex].addEventListener('load', function ()  {
                lazyImg[imgIndex].parentElement.classList.remove('skeleton__img');
            });
       
       delete lazyImagesPositions[imgIndex];
    }
   
    
}

window.addEventListener('scroll', function ()  {
    lazyScrollCheck();
});




