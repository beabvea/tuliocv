document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
  
    document.querySelectorAll("nav.navbar ul li a").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        } else {
          console.error("Element with ID ${targetId} not found.");
        }
      });
    });
  });
                function openModal(src) {
                    var modal = document.getElementById("certificateModal");
                    var modalImg = document.getElementById("modalImage");
                    modal.style.display = "block";
                    modalImg.src = src;
                }

                function closeModal() {
                    var modal = document.getElementById("certificateModal");
                    modal.style.display = "none";
                }