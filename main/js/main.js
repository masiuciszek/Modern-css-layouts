(() => {
  window.scroll({
    top: 10,
    left: 0,
    behavior: "smooth",
  });
  const themeToggler = document.querySelector(".dark-light-toggle");

  const start = () => {
    let currentTheme = getTheme();
    console.log(currentTheme);
    if (currentTheme) {
      document.body.className = currentTheme;
    }
  };

  function getTheme() {
    return window.localStorage.getItem("theme");
  }

  function setTheme(themeValue) {
    window.localStorage.setItem("theme", themeValue);
  }

  themeToggler.addEventListener("click", () => {
    if (document.body.classList.length === 0) {
      setTheme("dark-mode");
    } else if (document.body.className === "dark-mode") {
      setTheme("light-mode");
      themeToggler.textContent = "Dark Mode";
    } else if (document.body.className === "light-mode") {
      setTheme("dark-mode");
      themeToggler.textContent = "Light Mode";
    }
    start();
  });

  start();
})();

// if(document.body.classList)
// document.body.className = "dark-mode";
