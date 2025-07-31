document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Optional: Close menu when a nav link is clicked (mobile)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
      }
    });
  });
});

  const navbar = document.querySelector('.navbar');
  const highlight = document.querySelector('.nav-highlight');
  const navLinks = document.querySelectorAll('.nav-item');
  const navList = document.querySelector('.nav-links');

  function handleScroll() {
    const hero = document.querySelector('.hero-section');
    if (!hero) {
      // No hero section? Always show black
      navbar.classList.remove('top');
      navbar.classList.add('scrolled');
      return;
    }

    const heroHeight = hero.offsetHeight;
    if (window.scrollY > heroHeight - navbar.offsetHeight) {
      navbar.classList.remove('top');
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.add('top');
    }
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);

  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      const rect = link.getBoundingClientRect();
      const navRect = navList.getBoundingClientRect();
      highlight.style.width = `${rect.width}px`;
      highlight.style.height = `${rect.height}px`;
      highlight.style.left = `${rect.left - navRect.left}px`;
      highlight.style.top = `${rect.top - navRect.top}px`;
      highlight.style.opacity = 1;
    });
    link.addEventListener('mouseleave', () => {
      highlight.style.opacity = 0;
    });
  });



// ====== SLIDESHOW LOGIC ======
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
  });
  slides[n].classList.add("active");
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

showSlide(slideIndex);

document.addEventListener("DOMContentLoaded", () => {
  const allCommittees = [
    {
      name: "GA",
      fullName: "General Assembly",
      image: "https://imgur.com/YTdXnFX.png",
      link: "ga.html"
    },
    {
      name: "SC",
      fullName: "Security Council",
      image: "https://imgur.com/e8tR4Iq.png",
      link: "sc.html"
    },
    {
      name: "ECOSOC",
      fullName: "Economic & Social Council",
      image: "https://imgur.com/SogpXvp.png",
      link: "ecosoc.html"
    },
    {
      name: "UNHRC",
      fullName: "Human Rights Council",
      image: "https://imgur.com/Uk70Au5.png",
      link: "unhrc.html"
    },
    {
      name: "UNICEF",
      fullName: "Children's Fund",
      image: "https://imgur.com/TeLDflG.png",
      link: "unicef.html"
    },
    {
      name: "UNODC",
      fullName: "Drugs & Crime",
      image: "https://imgur.com/rqfZsdS.png",
      link: "unodc.html"
    },
    {
      name: "FAO",
      fullName: "Food & Agriculture",
      image: "https://imgur.com/L23GJGZ.png",
      link: "fao.html"
    },
    {
      name: "UNESCO",
      fullName: "Education & Culture",
      image: "https://imgur.com/bOe7rx8.png",
      link: "unesco.html"
    },
    {
      name: "WHO",
      fullName: "World Health Org",
      image: "https://imgur.com/jRIsHX4.png",
      link: "who.html"
    },
    {
      name: "IAEA",
      fullName: "Atomic Energy",
      image: "https://imgur.com/3m3bNW2.png",
      link: "iaea.html"
    }
  ];

  // Shuffle the array
  const shuffled = allCommittees.sort(() => 0.5 - Math.random());

  // Pick first 3
  const selected = shuffled.slice(0, 3);

  const grid = document.getElementById("committees-grid");

  selected.forEach((committee, index) => {
    const card = document.createElement("a");
    card.className = `committee-card slide-card card-${index + 1}`;
    card.href = committee.link;
    card.innerHTML = `
      <div style="background-image:url('${committee.image}')">
        <h3>${committee.name}</h3>
        <p>${committee.fullName}</p>
      </div>
    `;
    grid.appendChild(card);
  });
});
