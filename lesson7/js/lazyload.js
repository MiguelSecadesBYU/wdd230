const images = document.querySelectorAll("[data-src]");



function preloadImage(img){
    const src = img.getAttribute("data-src");
    if(!src){
        return;
    }

    img.src = src;
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry =>{
        if (!entry.isIntersecting){
            return;
        }else{
            preloadImage(entry.target);
            imageObserver.unobserve(entry.target);
        }
    })
});

images.forEach(image => {
    imgObserver.observe(image);
})