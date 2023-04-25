const btn = document.querySelector(".content__author-share");

btn.addEventListener("click", function(e){
    const shareView = document.querySelector(".content__author-view-share");
    const author = document.querySelector(".content__author");
    var width = window.innerWidth;
    console.log(width);
    if( width > 768 ) {
        if (shareView.style.display === "none") {
            shareView.style.display = "flex";
          } else {
            shareView.style.display = "none";
          }
        
    } else {

    shareView.style.display = "flex";

    author.style.display = "none";
    }

})

const btn2 = document.querySelector(".content__author-share2");

btn2.addEventListener("click", function(e){
    const shareView = document.querySelector(".content__author-view-share");
    shareView.style.display = "none";
    const author = document.querySelector(".content__author");
    author.style.display = "flex";
})