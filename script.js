// Scroll animation
const animated = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

animated.forEach(el => observer.observe(el));

// WhatsApp booking
function sendWhatsApp() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const test = document.getElementById("test").value;

  const msg = `Hello Safe Life Diagnostics,%0AName: ${name}%0APhone: ${phone}%0ATest: ${test}`;
  window.open(`https://wa.me/919326602540?text=${msg}`, "_blank");
}
