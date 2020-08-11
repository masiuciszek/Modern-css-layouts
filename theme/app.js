(() => {
  const darkRadioEl = document.getElementById("dark");
  const lightRadioEl = document.getElementById("light");
  const eightiesRadioEl = document.getElementById("eighties");
  const documentBody = document.querySelector("body");

  function start() {
    let currentTheme = getCurrentTheme();
    if (currentTheme) {
      documentBody.className = currentTheme;
    }
  }

  function getCurrentTheme() {
    return window.localStorage.getItem("theme");
  }
  function setTheme(value) {
    window.localStorage.setItem("theme", value);
  }

  function switchTheme() {
    if (darkRadioEl.checked) {
      documentBody.className = "dark";
      setTheme("dark");
      // documentBody.classList.add('dark')
    }
    if (lightRadioEl.checked) {
      documentBody.className = "light";
      setTheme("light");
      // documentBody.classList.add('dark')
    }
    if (eightiesRadioEl.checked) {
      documentBody.className = "century-80";
      setTheme("century-80");
      // documentBody.classList.add('dark')
    }
  }

  darkRadioEl.addEventListener("change", (e) => {
    switchTheme();
  });

  lightRadioEl.addEventListener("change", (e) => {
    switchTheme();
  });

  eightiesRadioEl.addEventListener("change", (e) => {
    switchTheme();
  });

  start();
})();
