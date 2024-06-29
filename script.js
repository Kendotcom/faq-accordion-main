document.querySelectorAll(".toggle-icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    const dropdownData = icon.parentElement.nextElementSibling;
    const isOpen = dropdownData.classList.toggle("show");

    icon.src = isOpen
      ? "/assets/images/icon-minus.svg"
      : "/assets/images/icon-plus.svg";
  });
});
