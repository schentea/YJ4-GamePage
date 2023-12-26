document.addEventListener("DOMContentLoaded", function () {
    const galleries = document.querySelectorAll(".gal");
  
    galleries.forEach((gallery) => {
      const images = gallery.querySelectorAll("img");
      let currentImageIndex = 0;
  
      function showImage(index) {
        images.forEach((img, i) => {
          img.style.display = i === index ? "block" : "none";
        });
      }
  
      function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
      }
  
      function prevImage() {
        currentImageIndex =
          (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
      }
  
      setInterval(nextImage, 3000); // Change image every 3 seconds
  
      showImage(currentImageIndex);
    });
  });