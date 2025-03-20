const tabs = ["Home", "About", "News", "Articles"];

tabs.map((name) => {
  document.getElementById(`tab${name}`).addEventListener("click", () => {
    tabs.map(
      (tab) => (document.getElementById(`page${tab}`).style.display = "none")
    );
    document.getElementById(`page${name}`).style.display = "block";
  });
});

document.getElementById("contactUs").addEventListener("click", () => {
  document.getElementById("header").style.display = "none";
  document.getElementById("footer").style.display = "none";
  document.getElementById("page").style.display = "none";

  document.getElementById("popup").style.display = "block";
});

document.getElementById("close").addEventListener("click", () => {
  document.getElementById("header").style.display = "block";
  document.getElementById("footer").style.display = "block";
  document.getElementById("page").style.display = "block";

  document.getElementById("popup").style.display = "none";
});

document.getElementById("submit").addEventListener("click", () => {
  document.getElementById("header").style.display = "block";
  document.getElementById("footer").style.display = "block";
  document.getElementById("page").style.display = "block";

  document.getElementById("popup").style.display = "none";
});
