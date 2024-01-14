const nav = document.getElementById('sticky-nav');
const headerHeight = 57;
const navMargin = 50;

if(window.innerWidth > 1000){
    window.addEventListener('scroll', () => {
        if(window.scrollY >= headerHeight + navMargin){
            nav.style.marginTop = String(window.scrollY - headerHeight) + "px";
        }
        else {
            nav.style.marginTop = "50px";
        }
    });
}
