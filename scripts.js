// Adding mouseover and mouseout styles dynamically
document.querySelectorAll(".nav-links li a").forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.backgroundColor = "#555";
  });
  link.addEventListener("mouseout", () => {
    link.style.backgroundColor = "#444";
  });
});

// Dropdown toggling for touch devices
document.querySelectorAll(".dropdown").forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    const content = dropdown.querySelector(".dropdown-content");
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

// Search bar functionality
document.getElementById("search-button").addEventListener("click", () => {
  const searchTerm = document.getElementById("search-input").value.trim();
  if (searchTerm) {
    alert(`Searching for: ${searchTerm}`);
  } else {
    alert("Please enter a search term.");
  }
});
