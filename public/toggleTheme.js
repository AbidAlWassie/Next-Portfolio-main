let initialTheme = localStorage.getItem("color_scheme");
changeTheme(+initialTheme);

function changeTheme(isDark) {
  var body = document.body;
  if (isDark) {
    localStorage.setItem("color_scheme", 1);
    body.classList.add("light");
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
    body.classList.remove("light");
    localStorage.setItem("color_scheme", 0);
  }
}

var toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  var body = document.body;
  changeTheme(!body.classList.contains("light"));
});