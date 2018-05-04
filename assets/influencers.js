if(window.IntersectionObserver && window.matchMedia("(min-width: 800px)").matches) {
  let observer = new IntersectionObserver(handleIntersect);
  let influencers = document.querySelectorAll(".influencer");

  for(let i = 0, len = influencers.length; i < len; i++) {
    influencers[i].classList.add("animate-in");
    observer.observe(influencers[i]);
  }
}

function handleIntersect(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      requestAnimationFrame(() => {
        entry.target.classList.remove("animate-in");
        observer.unobserve(entry.target);
      });
    }
  });
}
