(() => {
  window.scroll({
    top: 1200,
    left: 0,
    behavior: "smooth",
  });
  const themeToggler = document.querySelector(".dark-light-toggle");

  function start() {
    let storageTheme = getCurrentTheme();
    if (storageTheme) {
      setNewTheme("theme", setNewTheme);
      window.document.body.className = storageTheme;
    }
  }

  function handleTheme() {
    if (window.document.body.classList.contains("dark-mode")) {
      themeToggler.innerHTML = `<span>Light</span>`;
      // setNewTheme("dark-theme");
      // return "dark";
    } else if (window.document.body.classList.contains("light-mode")) {
      themeToggler.innerHTML = `<span>Dark</span>`;
      // setNewTheme("light-theme");
      // return "light";
    }
  }

  function getCurrentTheme(key) {
    return window.localStorage.getItem(key);
  }

  function setNewTheme(value) {
    window.localStorage.setItem("theme", value);
  }

  themeToggler.addEventListener("click", () => {
    if (document.body.className === "dark-mode") {
      setNewTheme("light-theme");
    } else if (document.body.className === "light-mode") {
      setNewTheme("dark-theme");
    }
  });

  handleTheme();
  start();
})();
