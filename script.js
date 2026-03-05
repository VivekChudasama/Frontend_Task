document.addEventListener("DOMContentLoaded", () => {
        const track = document.getElementById("carouselTrack");
        const cards = Array.from(track.querySelectorAll(".testimonial-card"));

        // Define the sequence of classes
        let classes = ["card-left", "card-center", "card-right"];

        function applyClasses() {
          cards.forEach((card, index) => {
            card.className = `testimonial-card ${classes[index]}`;
          });
        }

        document.getElementById("nextBtn").addEventListener("click", () => {
          classes.unshift(classes.pop());
          applyClasses();
        });

        document.getElementById("prevBtn").addEventListener("click", () => {
          classes.push(classes.shift());
          applyClasses();
        });
      });