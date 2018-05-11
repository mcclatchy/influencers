if(window.IntersectionObserver) {
  let influencers = document.querySelectorAll(".influencer");

  /**
   * Project Nav
   */

  let navObserver = new IntersectionObserver(entries => {
    let sentinel = entries[0];
    let show = sentinel.isIntersecting || sentinel.boundingClientRect.y < 0;
    document.querySelector(".project-flag").classList.toggle("down", show);
  });

  navObserver.observe(influencers[3]);

  /**
   * Animation on cards
   */

  // if(window.matchMedia("(min-width: 800px)").matches) {
    let cardObserver = new IntersectionObserver(handleCardIntersect);

    for(let i = 0, len = influencers.length; i < len; i++) {
      influencers[i].classList.add("animate-in");
      cardObserver.observe(influencers[i]);
    }
  // }

  function handleCardIntersect(entries, observer) {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        requestAnimationFrame(() => {
          entry.target.classList.remove("animate-in");
          observer.unobserve(entry.target);
        });
      }
    });
  }
}
