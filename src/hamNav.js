const hamNav = () => {
  console.log("hamNav");
  var x = document.getElementById("hamNav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};
