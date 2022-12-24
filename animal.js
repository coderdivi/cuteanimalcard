let sliderContainer = document.querySelector('.slider'),
    prev = document.querySelector('#prev'),
    next = document.querySelector('#next'),
    slideItems = document.querySelectorAll('.slide'),
    current = 0;


slideItems.forEach( item => {
    item.addEventListener("mouseover", function() {
        prev.style.display="block";
        next.style.display="block";
    })
})

slideItems.forEach(item => {
    item.addEventListener("mouseout", function(){
        prev.style.display="none";
        next.style.display="none";
    });
});

prev.addEventListener("mouseover", function(){
    prev.style.display="block";
    next.style.display="block";
});

next.addEventListener("mouseover", function(){
    prev.style.display="block";
    next.style.display="block";
});

var slideOff = 1;
showDivs(slideOff);

function plusDivs(n) {
  showDivs(slideOff += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideOff = 1}
  if (n < 1) {slideOff = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideOff-1].style.display = "block";  
}
