function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function goTo(id) {
  document.getElementById(id).scrollIntoView({ behavior:"smooth" });
}

/* Counters */
const counters = document.querySelectorAll(".counter");
let started = false;
window.addEventListener("scroll", () => {
  if (started) return;
  const section = document.getElementById("traction");
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    started = true;
    counters.forEach(c => {
      let t = +c.dataset.target, n = 0, step = Math.ceil(t / 60);
      const run = () => {
        n += step;
        c.textContent = n >= t ? t : n;
        if (n < t) requestAnimationFrame(run);
      };
      run();
    });
  }
});

function submitForm(e) {
  e.preventDefault();
  document.getElementById("success").hidden = false;
}
