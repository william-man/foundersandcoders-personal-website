// change opacity to 1 on active tab

function buttonClick(tab, id) {
  const activebut = document.getElementById(tab);
  const buttons = document.getElementsByClassName("nav-button");
  const target = document.getElementById(id);
  //remove active-button from all buttons then add it back to the one clicked
  //and scroll to target
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active-button");
  }
  activebut.classList.add("active-button");
  target.scrollIntoView();
}
