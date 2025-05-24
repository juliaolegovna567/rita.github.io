document.addEventListener("DOMContentLoaded", () => {
    const memes = document.querySelectorAll(".meme");
    memes.forEach((meme, i) => {
      setTimeout(() => {
        meme.classList.remove("hidden");
        meme.classList.add("show");
      }, 500 + i * 500);
    });
  
    const status = document.getElementById("status");
    const statuses = [
      "😟 'Никто не ценит того, чего слишком много'",
      "🌎 ' Живу жизнью, о которой мечтала'",
      "😛 'Хочу сайт крутой  и прикольный'",
      "🔥 'Пишу стили, как дышу'",
    ];
    let index = 0;
  
    status.addEventListener("click", () => {
      index = (index + 1) % statuses.length;
      status.textContent = statuses[index];
    });
  
    // 💡 Модальное окно
    const interestInfo = {
      "Игры": "Я обожаю игру роблакс, сабвейсёрф, пази, я обожаю играть!",
      "Музыка": "В целом я люблю музыку с битом, которая качает, но и с вверхними оперными нотами!",
      "Ночевки": "Очень люблю когда ко мне приходят на ночевку, сразу становится весело!",
      "Долгие поездки": "Я обожаю ощущать кайф от исследования новых мест, приключений!"
    };
  
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-description");
    const closeModal = document.getElementById("closeModal");
  
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const title = card.textContent.trim();
        modalTitle.textContent = title;
        modalDesc.textContent = interestInfo[title] || "Информация скоро появится.";
        modal.style.display = "flex";
      });
    });
  
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
// Language switcher functionality
document.addEventListener("DOMContentLoaded", () => {
  // Existing code...
  
  // Language data
  const translations = {
    ru: {
      title: "Соц сеть",
      name: "Маргарита Смирнова",
      interests: "Мои интересы",
      projects: "Мои проекты",
      figma: "Figma-проекты",
      memes: "Любимые мемы",
      games: "Игры",
      music: "Музыка",
      sleepovers: "Ночевки",
      travels: "Долгие поездки"
    },
    en: {
      title: "Social Network",
      name: "Margarita Smirnova",
      interests: "My Interests",
      projects: "My Projects",
      figma: "Figma Projects",
      memes: "Favorite Memes",
      games: "Games",
      music: "Music",
      sleepovers: "Sleepovers",
      travels: "Long Trips"
    }
  };

  // Language elements to translate
  const elementsToTranslate = {
    "title": document.querySelector("title"),
    "name": document.querySelector("header h1"),
    "interests": document.querySelector(".interests h2"),
    "projects": document.querySelector(".projects h2"),
    "figma": document.querySelector(".figma-projects h2"),
    "memes": document.querySelector(".memes h2"),
    "games": document.querySelector(".card:nth-child(1)"),
    "music": document.querySelector(".card:nth-child(2)"),
    "sleepovers": document.querySelector(".card:nth-child(3)"),
    "travels": document.querySelector(".card:nth-child(4)")
  };

  // Language buttons
  const langButtons = document.querySelectorAll(".lang-btn");
  
  // Set initial language from localStorage or default to Russian
  let currentLang = localStorage.getItem("language") || "ru";
  updateLanguage(currentLang);

  // Button click handlers
  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      if (lang !== currentLang) {
        currentLang = lang;
        updateLanguage(lang);
        localStorage.setItem("language", lang);
        
        // Update active button
        langButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      }
    });
  });

  function updateLanguage(lang) {
    // Update all translatable elements
    for (const [key, element] of Object.entries(elementsToTranslate)) {
      if (element && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    }
    
    // Update modal content if needed
    const interestInfo = {
      "ru": {
        "Игры": "Я обожаю игру роблакс, сабвейсёрф, пази, я обожаю играть!",
        "Музыка": "В целом я люблю музыку с битом, которая качает, но и с вверхними оперными нотами!",
        "Ночевки": "Очень люблю когда ко мне приходят на ночевку, сразу становится весело!",
        "Долгие поездки": "Я обожаю ощущать кайф от исследования новых мест, приключений!"
      },
      "en": {
        "Games": "I love playing Roblox, Subway Surfers, puzzles - I just love gaming!",
        "Music": "I generally like music with a good beat that pumps you up, but also with high operatic notes!",
        "Sleepovers": "I really love when friends come over for sleepovers - it's always so much fun!",
        "Long Trips": "I adore the thrill of exploring new places and going on adventures!"
      }
    };
    
    // Update project cards if they have different names in translations
    if (lang === "en") {
      document.querySelector(".card:nth-child(1)").textContent = "Games";
      document.querySelector(".card:nth-child(2)").textContent = "Music";
      document.querySelector(".card:nth-child(3)").textContent = "Sleepovers";
      document.querySelector(".card:nth-child(4)").textContent = "Long Trips";
    } else {
      document.querySelector(".card:nth-child(1)").textContent = "Игры";
      document.querySelector(".card:nth-child(2)").textContent = "Музыка";
      document.querySelector(".card:nth-child(3)").textContent = "Ночевки";
      document.querySelector(".card:nth-child(4)").textContent = "Долгие поездки";
    }
  }
});



// Фоновая музыка
document.addEventListener("DOMContentLoaded", () => {
  // ... ваш существующий код ...
  
  const musicToggle = document.getElementById('musicToggle');
  const bgMusic = document.getElementById('bgMusic');
  const volumeSlider = document.getElementById('volumeSlider');
  
  // Проверяем сохраненные настройки музыки
  const savedMusicState = localStorage.getItem('musicState');
  const savedVolume = localStorage.getItem('musicVolume');
  
  if (savedMusicState === 'playing') {
    bgMusic.play();
    musicToggle.textContent = '🔊';
  } else {
    musicToggle.textContent = '🔇';
  }
  
  if (savedVolume) {
    bgMusic.volume = parseFloat(savedVolume);
    volumeSlider.value = savedVolume;
  } else {
    bgMusic.volume = 0.5; // Установка громкости по умолчанию
  }
  
  // Обработчик клика по кнопке
  musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
      bgMusic.play();
      musicToggle.textContent = '🔊';
      localStorage.setItem('musicState', 'playing');
    } else {
      bgMusic.pause();
      musicToggle.textContent = '🔇';
      localStorage.setItem('musicState', 'paused');
    }
  });
  
  // Регулировка громкости
  volumeSlider.addEventListener('input', () => {
    bgMusic.volume = volumeSlider.value;
    localStorage.setItem('musicVolume', volumeSlider.value);
  });
  
  // Автовоспроизведение с учетом политики браузеров
  document.body.addEventListener('click', () => {
    if (bgMusic.paused && savedMusicState === 'playing') {
      bgMusic.play().catch(e => console.log('Автовоспроизведение заблокировано'));
    }
  }, { once: true });
});
  