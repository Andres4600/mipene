onload = () => {
  document.body.classList.remove("container");
};

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("btnLogin").addEventListener("click", function () {
      let audioElement = document.getElementById("audioElement");
      window.location.href = "floresA.html"; 
  });
});