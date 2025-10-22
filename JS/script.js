document.addEventListener("DOMContentLoaded", () => {
  console.log("JS loaded successfully!");

  // ===== Task 1: Form validation (only if form exists)
  const form = document.querySelector(".contact_form");
  if (form) {
    let messageBox = document.createElement("div");
    messageBox.id = "formMessages";
    form.appendChild(messageBox);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      messageBox.innerHTML = "";
      messageBox.style.color = "red";

      const name = document.getElementById("person_name").value.trim();
      const email = document.getElementById("person_email").value.trim();

      let errors = [];
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if (name === "") errors.push("Please enter your name.");
      if (email === "") errors.push("Please enter your email.");
      else if (!email.match(emailPattern)) errors.push("Please enter a valid email address.");

      if (errors.length > 0) {
        messageBox.innerHTML = errors.join("<br>");
      } else {
        messageBox.style.color = "green";
        messageBox.innerHTML = "✅ Thank you! We will contact you soon.";
        form.reset();
      }
    });
  }

  // ===== Task 1.2 — Variables
  let myName = "Nurlan";
  let myAge = 20;
  let isStudent = true;
  console.log(`My name is ${myName}, I am ${myAge} years old, and it is ${isStudent} that I am a student.`);

  // ===== Task 2: Accordion
  const accordionItems = document.querySelectorAll(".accordion-item");
  accordionItems.forEach(item => {
    const title = item.querySelector(".accordion-title");
    title.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

  // ===== Task 3: Popup Form
  const openPopupBtn = document.getElementById("openPopupBtn");
  const popupOverlay = document.getElementById("popupOverlay");
  const closePopupBtn = document.getElementById("closePopupBtn");

  if (openPopupBtn && popupOverlay && closePopupBtn) {
    openPopupBtn.addEventListener("click", () => {
      popupOverlay.style.display = "flex";
    });

    closePopupBtn.addEventListener("click", () => {
      popupOverlay.style.display = "none";
    });

    popupOverlay.addEventListener("click", (event) => {
      if (event.target === popupOverlay) {
        popupOverlay.style.display = "none";
      }
    });
  }
});







// --- Task 1: Simple Rating Interaction ---
const stars = document.querySelectorAll('.star');
const message = document.querySelector('.rating-message');

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    stars.forEach((s, i) => {
      s.style.color = i <= index ? 'gold' : 'gray';
    });
    message.textContent = `You rated this app ${index + 1} stars!`;
  });
});



function changeLanguage(lang) {
    const textElement = document.querySelector(".lang-text");
    switch (lang) {
      case "en":
        textElement.textContent = "Hello! Welcome to our site.";
        break;
      case "ru":
        textElement.textContent = "Привет! Добро пожаловать на наш сайт.";
        break;
      case "kk":
        textElement.textContent = "Сәлем! Біздің сайтқа қош келдіңіз.";
        break;
      default:
        textElement.textContent = "Language not supported.";
    }
  }




// ===== Task 2: Arrays + Loops (Dynamic Cars Catalog) =====
document.addEventListener("DOMContentLoaded", () => {
  const carList = document.getElementById("carList");

  if (carList) {
    // массив объектов с машинами
    const cars = [
      { brand: "Porsche 911", year: 2024, price: 180000 },
      { brand: "Lamborghini Huracán", year: 2023, price: 220000 },
      { brand: "McLaren 720S", year: 2022, price: 250000 },
      { brand: "Rolls-Royce Ghost", year: 2021, price: 300000 },
      { brand: "Bugatti Chiron", year: 2019, price: 350000 },
    ];

    // создаём HTML через цикл
    cars.forEach(car => {
      const item = document.createElement("div");
      item.classList.add("car-item");
      item.innerHTML = `
        <h3>${car.brand}</h3>
        <p>Year: ${car.year}</p>
        <p>Price: $${car.price.toLocaleString()}</p>
      `;
      carList.appendChild(item);
    });
  }
});



// ===== Task 5: Animation + Sound =====
document.addEventListener("DOMContentLoaded", () => {
  const animateBtn = document.getElementById("animateBtn");
  const cards = document.querySelectorAll(".service_card");

  // Создаём звук
  const carSound = new Audio("/sounds/car-engine-372477 (1).mp3"); 

  if (animateBtn && cards.length > 0) {
    animateBtn.addEventListener("click", () => {
      // проигрываем звук при клике
      carSound.play();

      // анимация карточек по очереди
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("jump");
          setTimeout(() => card.classList.remove("jump"), 600);
        }, index * 200);
      });
    });
  }
});


  