// ========================================
// SEARCH FILTER
// ========================================

const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const filter = searchInput.value.toLowerCase();

    const categories = document.querySelectorAll(".catalog-category");

    categories.forEach((category) => {
      const cards = category.querySelectorAll(".product-card");

      let visibleCards = 0;

      cards.forEach((card) => {
        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(filter)) {
          card.style.display = "block";

          visibleCards++;
        } else {
          card.style.display = "none";
        }
      });

      if (visibleCards === 0) {
        category.style.display = "none";
      } else {
        category.style.display = "block";
      }
    });
  });
}

// ========================================
// MODAL WINDOW
// ========================================

const modal = document.getElementById("productModal");

if (modal) {
  const openButtons = document.querySelectorAll(".openModal");

  const closeBtn = document.querySelector(".close-btn");

  const modalTitle = document.getElementById("modalTitle");

  const modalPrice = document.getElementById("modalPrice");

  openButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const card = button.parentElement;

      const title = card.querySelector("h3").innerText;

      const price = card.querySelector("p").innerText;

      modalTitle.innerText = title;

      modalPrice.innerText = price;

      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

// ========================================
// CATEGORY FILTER
// ========================================

const params = new URLSearchParams(window.location.search);

const category = params.get("category");

if (category) {
  const sections = document.querySelectorAll(".catalog-category");

  sections.forEach((section) => {
    if (section.dataset.category !== category) {
      section.style.display = "none";
    }
  });
}

// ========================================
// CONTACT FORM
// ========================================

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      formMessage.textContent = "Please fill in all fields!";

      formMessage.style.color = "red";
    } else {
      formMessage.textContent = "Message sent successfully!";

      formMessage.style.color = "green";

      contactForm.reset();
    }
  });
}
