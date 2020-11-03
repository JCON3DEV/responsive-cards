var tr = document.querySelector(".trigger");
var menu = document.querySelector(".menu");
let isVisible = false;

tr.onclick = function () {
  if (!isVisible) {
    classie.addClass(menu, "menu--show");
    classie.removeClass(menu, "menu--hide");
    isVisible = !isVisible;
  } else {
    classie.removeClass(menu, "menu--show");
    classie.addClass(menu, "menu--hide");
    isVisible = !isVisible;
  }
  // classie.toggle(menu, 'menu--show' );
};
