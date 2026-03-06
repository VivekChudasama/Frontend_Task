document.addEventListener("DOMContentLoaded", () => {
  const cards = Array.from(document.querySelectorAll(".testimonial-card"));

  let positions = ["pos-left", "pos-center", "pos-right"];

  function updatePositions() {
    cards.forEach((card, index) => {
      card.classList.remove("pos-left", "pos-center", "pos-right");
      card.classList.add(positions[index]);
    });
  }

  document.getElementById("nextBtn").addEventListener("click", () => {
    positions.unshift(positions.pop());
    updatePositions();
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    positions.push(positions.shift());
    updatePositions();
  });
});