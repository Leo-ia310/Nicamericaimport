const canvas = document.querySelector("#motion-field");
const ctx = canvas.getContext("2d");
const brandMark = document.querySelector("[data-tilt]");
const mapStage = document.querySelector("#map-stage");
const pulseButton = document.querySelector("#pulse-button");
const progressNumber = document.querySelector("#progress-number");
const progressBar = document.querySelector("#progress-bar");

let width = 0;
let height = 0;
let particles = [];
let pointer = { x: 0, y: 0, active: false };

function resize() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  particles = Array.from({ length: Math.min(95, Math.floor(width / 15)) }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    size: Math.random() * 2.2 + 0.8,
    hue: Math.random() > 0.78 ? "217, 180, 111" : "248, 251, 255"
  }));
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  for (const particle of particles) {
    if (pointer.active) {
      const dx = pointer.x - particle.x;
      const dy = pointer.y - particle.y;
      const distance = Math.hypot(dx, dy);
      if (distance < 180) {
        particle.vx -= dx * 0.00005;
        particle.vy -= dy * 0.00005;
      }
    }

    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < -10) particle.x = width + 10;
    if (particle.x > width + 10) particle.x = -10;
    if (particle.y < -10) particle.y = height + 10;
    if (particle.y > height + 10) particle.y = -10;

    ctx.beginPath();
    ctx.fillStyle = `rgba(${particle.hue}, 0.55)`;
    ctx.shadowColor = `rgba(${particle.hue}, 0.5)`;
    ctx.shadowBlur = 14;
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.shadowBlur = 0;
  requestAnimationFrame(draw);
}

function tiltLogo(event) {
  const rect = brandMark.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const rotateY = ((x / rect.width) - 0.5) * 16;
  const rotateX = ((y / rect.height) - 0.5) * -16;
  brandMark.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function resetTilt() {
  brandMark.style.transform = "rotateX(0deg) rotateY(0deg)";
}

function animateProgress() {
  let value = 66;
  setInterval(() => {
    value = value >= 84 ? 66 : value + 1;
    progressNumber.textContent = `${value}%`;
    progressBar.style.width = `${value}%`;
  }, 920);
}

window.addEventListener("resize", resize);
window.addEventListener("pointermove", (event) => {
  pointer = { x: event.clientX, y: event.clientY, active: true };
});
window.addEventListener("pointerleave", () => {
  pointer.active = false;
});

brandMark.addEventListener("pointermove", tiltLogo);
brandMark.addEventListener("pointerleave", resetTilt);

pulseButton.addEventListener("click", () => {
  mapStage.classList.add("is-boosted");
  mapStage.scrollIntoView({ behavior: "smooth", block: "center" });
  window.setTimeout(() => mapStage.classList.remove("is-boosted"), 2600);
});

resize();
draw();
animateProgress();
