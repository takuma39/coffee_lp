window.addEventListener('DOMContentLoaded', () => {
    let anchorLinks = document.querySelectorAll('a[href^="#"]');
    let anchorLinksArr = Array.prototype.slice.call(anchorLinks);
  
    anchorLinksArr.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        let targetId = link.hash;
        console.log(targetId);
        let targetElement = document.querySelector(targetId);
        console.log(targetElement);
        let targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
        console.log(targetOffsetTop);
        window.scrollTo({
          top: targetOffsetTop,
          behavior: "smooth"
        });
      });
    });
  });

