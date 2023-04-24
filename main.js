const btn = document.querySelector(".content__author-share");

btn.addEventListener("click", function(e){
const shareView = document.querySelector(".content__author-view-share");
shareView.style.display = "flex";
const author = document.querySelector(".content__author");
author.style.display = "none";
})

const btn2 = document.querySelector(".content__author-share2");

btn2.addEventListener("click", function(e){
    const shareView = document.querySelector(".content__author-view-share");
    shareView.style.display = "none";
    const author = document.querySelector(".content__author");
    author.style.display = "flex";
})