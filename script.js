// Hero slider
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let current = 0;

function showSlide(index){
  slides.forEach((slide,i)=>{
    slide.classList.remove("active");
    dots[i].classList.remove("active");
    if(i===index){
      slide.classList.add("active");
      dots[i].classList.add("active");
    }
  });
}

setInterval(()=>{
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);

// Scroll reveal animation
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.1});

document.querySelectorAll(".reveal").forEach(el=>{
  observer.observe(el);
});
