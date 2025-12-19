const filter = document.getElementById("filterFilm");
const cards = document.querySelectorAll(".movie-card");

filter.addEventListener("change", () => {
  const genre = filter.value;

  cards.forEach(card => {
    card.style.display =
      genre === "all" || card.dataset.genre === genre
        ? ""
        : "none";
  });
});
