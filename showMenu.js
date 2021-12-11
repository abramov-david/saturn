const mainMenu = document.querySelector(".main_menu");
const btnMenu = document.getElementById("menuBtn");

console.log(btnMenu);
const openCloseMenu = () => {
  const showMenu = () => {
    mainMenu.style.display = "block";
  };
  btnMenu.addEventListener("click", showMenu);

  document.onclick = function (event) {
    if (event.target.id != "menuBtn") {
      mainMenu.style.display = "none";
    }
  };
};

openCloseMenu();
