// Toggler
const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click",(e) => {
  navbar.classList.toggle("nav__expanded");
});

// Services
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click" , (e) => {
    const targetTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    tab.classList.add("active");
    targetTabContent.classList.add("active");
  })
});

