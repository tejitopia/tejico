// DOM Elements
const navLinks = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");
const hamburgerSpans = hamburger.getElementsByTagName("span");

// Toggle Mobile Menu
function toggleMenu() {
  navLinks.classList.toggle("active");

  // Animate hamburger
  if (navLinks.classList.contains("active")) {
    hamburgerSpans[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
    hamburgerSpans[1].style.opacity = "0";
    hamburgerSpans[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
  } else {
    resetHamburger();
  }
}

// Reset Hamburger Style
function resetHamburger() {
  hamburgerSpans[0].style.transform = "none";
  hamburgerSpans[1].style.opacity = "1";
  hamburgerSpans[2].style.transform = "none";
}

// Close Menu When Clicking Outside
document.addEventListener("click", function (event) {
  const isClickInside =
    hamburger.contains(event.target) || navLinks.contains(event.target);

  if (!isClickInside && navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
    resetHamburger();
  }
});

// Close Menu When Clicking Links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    resetHamburger();
  });
});

// Optional: Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const sectionId = this.getAttribute("href");
    document.querySelector(sectionId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Optional: Form Handling
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitButton = contactForm.querySelector(".submit-button");

    try {
      submitButton.textContent = "Sending...";

      // Add your form submission logic here
      // Example:
      // const formData = new FormData(contactForm);
      // await submitForm(formData);

      submitButton.textContent = "Message Sent!";
      contactForm.reset();
    } catch (error) {
      submitButton.textContent = "Error - Try Again";
      console.error("Form submission error:", error);
    }

    // Reset button after delay
    setTimeout(() => {
      submitButton.textContent = "Send Message";
    }, 3000);
  });
}

// Optional: Scroll Animations
function handleScroll() {
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.75) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);
handleScroll(); // Initial check
