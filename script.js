let openedCards = 0;

const totalCards = 7;


/* =========================
   START EXPERIENCE
========================= */

function startExperience() {

  const intro = document.getElementById("intro");
  const main = document.getElementById("main");

  intro.style.display = "none";

  main.style.display = "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  createHearts();

}


/* =========================
   OPEN CARD
========================= */

function openCard(cardContainer) {

  const alreadyOpen = cardContainer.classList.contains("open");

  if (alreadyOpen) {
    cardContainer.classList.remove("open");
    openedCards = Math.max(0, openedCards - 1);
    updateProgress();
    return;
  }

  cardContainer.classList.add("open");

  openedCards++;

  updateProgress();

  createHeartBurst(cardContainer);

}


/* =========================
   UPDATE PROGRESS
========================= */

function updateProgress() {

  const count = document.getElementById("openedCount");

  const progress = document.getElementById("progress");

  count.textContent = openedCards;

  const percentage =
    (openedCards / totalCards) * 100;

  progress.style.width = percentage + "%";


  if (openedCards === totalCards) {

    setTimeout(() => {

      const finalSection =
        document.getElementById("finalSection");

      finalSection.classList.add("ready");

      finalSection.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    }, 800);

  }

}


/* =========================
   FINAL MESSAGE
========================= */

function showFinalMessage() {

  const finalMessage =
    document.getElementById("finalMessage");

  finalMessage.style.display = "block";

  finalMessage.scrollIntoView({
    behavior: "smooth"
  });

  createHeartExplosion();

}


/* =========================
   FLOATING HEARTS
========================= */

function createHearts() {

  setInterval(() => {

    createFloatingHeart();

  }, 1300);

}


function createFloatingHeart() {

  const heart =
    document.createElement("div");

  heart.className = "heart-float";

  heart.innerHTML =
    Math.random() > 0.5 ? "♡" : "♥";

  heart.style.left =
    Math.random() * 100 + "vw";

  heart.style.fontSize =
    (12 + Math.random() * 20) + "px";

  heart.style.animationDuration =
    (4 + Math.random() * 4) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {

    heart.remove();

  }, 8000);

}


/* =========================
   CARD HEART BURST
========================= */

function createHeartBurst(element) {

  const rect =
    element.getBoundingClientRect();

  for (let i = 0; i < 5; i++) {

    const heart =
      document.createElement("div");

    heart.className = "heart-float";

    heart.innerHTML = "♡";

    heart.style.position = "fixed";

    heart.style.left =
      rect.left +
      Math.random() * rect.width +
      "px";

    heart.style.top =
      rect.top +
      Math.random() * rect.height +
      "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);

  }

}


/* =========================
   FINAL HEART EXPLOSION
========================= */

function createHeartExplosion() {

  for (let i = 0; i < 35; i++) {

    setTimeout(() => {

      createFloatingHeart();

    }, i * 80);

  }

}