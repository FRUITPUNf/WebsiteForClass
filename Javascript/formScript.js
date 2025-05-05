
function showPopup(message) {
  const popup = document.getElementById("popup");
  const messageEl = document.getElementById("popup-message");
  messageEl.textContent = message;
  popup.classList.remove("hidden");
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
    setTimeout(() => popup.classList.add("hidden"), 300);
  }, 4000);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    const inputs = form.querySelectorAll("input[type='text'], textarea");
    let valid = true;
    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = "red";
        valid = false;
      } else {
        input.style.borderColor = "#ccc";
      }
    });
    const email = form.querySelector("input[type='text'][name*='email'], input[type='text'][name*='Email']");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailPattern.test(email.value.trim())) {
      email.style.borderColor = "red";
      showPopup("Please enter a valid email address.");
      valid = false;
    }
    if (!valid) {
      showPopup("Please fill in all required fields correctly.");
      e.preventDefault();
    }
  });
});
