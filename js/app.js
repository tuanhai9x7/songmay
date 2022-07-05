// ACTIVE HEADER MENU MOBILE 
(() => {
  document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector(".menu-mb").classList.add("active");
  });

  window.addEventListener("click", (e) => {
    if (
      (!document.querySelector(".menu-mb").contains(e.target) &&
        !e.target.matches(".menu-toggle")) ||
      e.target.matches(".close")
    ) {
      document.querySelector(".menu-mb").classList.remove("active");
    }
  });
})()