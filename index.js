//For SaleBar Close On Click---------------------> 
history.scrollRestoration = "auto"; //or can be manual also if needed!!
var close = document.getElementById("close")
var salebar = document.getElementById("salebar")
close.addEventListener("click",function(){
    salebar.style.display="none"
})

//For Naviagting to that Particular Section----------->
var newarrivals=document.getElementById("newarrivals") //navclick
var mostwanted=document.getElementById("mostwanted") //navclick
var subscribe=document.getElementById("subscribe") //navclick

newarrivals.addEventListener("click",function(){
    newarrivalssection.scrollIntoView()
})
mostwanted.addEventListener("click",function(){
    mostwantedsection.scrollIntoView()
})
subscribe.addEventListener("click",function(){
    subscribesection.scrollIntoView()
})

//sidemini navbar----------------------------------------->
let menubutton = document.getElementById("menubutton")
let closemenu = document.getElementById("closemenu")
let sidenav = document.getElementById("sidenav")

menubutton.addEventListener("click", function(){
    sidenav.classList.remove("translate-x-full")
})

closemenu.addEventListener("click", function(){
    sidenav.classList.add("translate-x-full")
})

//for AdImageSlide on *rightclick AND for *leftclick-------->
//Rightclick
var imageindex=0
var banner=document.getElementById("banner")
var rightclick=document.getElementById("rightclick")
var adimage=document.getElementById("adimage")

var images = [
    "./images/Ad1.webp",
    "./images/Ad2.webp",
    "./images/Ad3.webp",
    "./images/Ad5.jpg",
    "./images/Ad6.avif",
]

rightclick.addEventListener("click",function(){
    imageindex=imageindex+1

    if(imageindex>=images.length){
        imageindex = 0
    }

    adimage.src = images[imageindex]
})
//Leftclick
var imageindex=0
var banner=document.getElementById("banner")
var leftclickclick=document.getElementById("leftclickclick")
var adimage=document.getElementById("adimage")

var images = [
    "./images/Ad1.webp",
    "./images/Ad2.webp",
    "./images/Ad3.webp",
    "./images/Ad5.jpg",
    "./images/Ad6.avif",
]

leftclick.addEventListener("click",function(){
    imageindex=imageindex-1

    if(imageindex<0){
        imageindex = images.length-1
    }

    adimage.src = images[imageindex]
})
//Autoslide feature for banner---->
setInterval(function () {
    imageindex = imageindex + 1

if (imageindex >= images.length) {
    imageindex = 0
}

adimage.src = images[imageindex]
}, 1500)

//-----------------Most Wanted Auto Carousel right and left move on click----------------------------->
let mostwantedcarousel = document.getElementById("mostwantedcarousel");

mostwantedcarousel.addEventListener("click", function(event) {

    let position = event.clientX -
        mostwantedcarousel.getBoundingClientRect().left;

    let middle = mostwantedcarousel.offsetWidth / 2;

    if (position < middle) {

        // Clicked on LEFT side → move RIGHT
        mostwantedcarousel.scrollBy({
            left: -300,
            behavior:"smooth"
        });

    } else {

        // Clicked on RIGHT side → move LEFT
        mostwantedcarousel.scrollBy({
            left: 300,
            behavior: "smooth"
        });

    }

});

//Find every heart icon on the page (one per product card)
// Find every heart icon on the page (one per product card)
document.querySelectorAll(".wishlist-icon").forEach(function(svg) {

    // Attach a click listener to each one separately
    svg.addEventListener("click", function() {

        // Grab the actual heart-shaped path inside THIS svg
        var heart = svg.querySelector(".wishlist-heart");

        // Check its current color before deciding what to switch it to
        var isRed = heart.getAttribute("fill") === "red";

        // Toggle: white -> red, red -> white
        heart.setAttribute("fill", isRed ? "#fff" : "red");
    });
});