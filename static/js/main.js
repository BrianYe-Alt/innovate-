// Smooth scroll for anchor links (supplement CSS)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Optional: header background on scroll
const header = document.querySelector(".site-header");
if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      header.style.background = "rgba(255, 255, 255, 0.98)";
    } else {
      header.style.background = "rgba(255, 255, 255, 0.95)";
    }
  });
}

// Leaderboard tabs
document.querySelectorAll(".leaderboard-tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    const tabId = this.getAttribute("data-tab");
    document.querySelectorAll(".leaderboard-tab").forEach((t) => t.classList.remove("active"));
    document.querySelectorAll(".leaderboard-panel").forEach((p) => p.classList.remove("active"));
    this.classList.add("active");
    const panel = document.getElementById("leaderboard-" + tabId);
    if (panel) panel.classList.add("active");
  });
});
