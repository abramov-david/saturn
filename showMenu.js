const mainMenu = document.querySelector(".main_menu");
const btnMenu = document.querySelector(".menu");

const openCloseMenu = () => {
  const showMenu = () => {
    mainMenu.style.display = "block";
  };
  btnMenu.addEventListener("click", showMenu);

  document.onclick = function (event) {
    if (event.target.className != "header_menu") {
      mainMenu.style.display = "none";
    }
  };
};

openCloseMenu();
