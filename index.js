


document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");
  const links = document.querySelectorAll(".nav-links a");

  // Toggle dropdown menu
  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuIcon.classList.toggle("open");
  });

  // Close dropdown when link clicked
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuIcon.classList.remove("open");
    });
  });
});
  // 🔹 Scroll show/hide header (optional)
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > 100) header.classList.add('visible');
    else header.classList.remove('visible');
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

  // 🔹 Animate news cards on scroll
  const newsCards = document.querySelectorAll('.news-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cards = Array.from(newsCards);
        cards.forEach((card, index) => {
          setTimeout(() => card.classList.add('visible'), index * 200);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.2 });
  newsCards.forEach(card => observer.observe(card));

  // 🔹 Dark mode toggle
  const themeBtn = document.getElementById('theme-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      themeBtn.textContent = document.body.classList.contains('dark-mode') ? "☀️" : "🌙";
    });
  }

  // 🔹 Reveal hidden sections on scroll
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".hidden");
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 150) section.classList.add("visible");
    });
  });




// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  const showBtn = document.getElementById("showComplaintBtn");
  const complainSection = document.getElementById("complain");

  showBtn.addEventListener("click", function() {
    complainSection.style.display = "block"; // show section
    complainSection.scrollIntoView({ behavior: "smooth" }); // scroll to it
  });
});
