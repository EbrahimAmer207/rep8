


window.addEventListener("scroll",function(){
    var scrollValue = this.window.scrollY;
    var navbar =this.document.querySelector(".navbar");
    if(scrollValue < 300){
        navbar.classList.remove('ahmed');
    }else{
        navbar.classList.add('ahmed');
    }
});