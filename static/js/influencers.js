(function() {
  let influencers = document.querySelectorAll(".influencer");
  let flag = document.querySelector(".project-flag");

  /**
   * Project Nav
   */

  let navObserver = new IntersectionObserver(entries => {
    let sentinel = entries[0];
    let show = sentinel.isIntersecting || sentinel.boundingClientRect.y < 0;
    flag.classList.toggle("down", show);
  });

  navObserver.observe(influencers[3]);

  // Location change additions
  
  function handleHashChange() {
    let newTarget = document.querySelector(location.hash);
    if(newTarget.classList.contains("influencer")) {
      flag.classList.remove("down");

      if(newTarget.classList.contains("animate-in")) {
        window.scrollBy(0, -80);
      }

      setTimeout(function() {
        window.addEventListener('scroll', handleQuickScroll);
      }, 100);
    }
  }

  function handleQuickScroll() {
    flag.classList.add("down");
    window.removeEventListener("scroll", handleQuickScroll);
  }

  window.addEventListener("hashchange", handleHashChange);

  /**
   * Animation on cards
   */

  let cardObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        requestAnimationFrame(() => {
          entry.target.classList.remove("animate-in");
          observer.unobserve(entry.target);
        });
      }
    });
  });

  for(let i = 0, len = influencers.length; i < len; i++) {
    influencers[i].classList.add("animate-in");
    cardObserver.observe(influencers[i]);
  }

  /**
   * Social Media
   */

  let smlinks = document.querySelectorAll(".project-social-link");
  smlinks.forEach(l => {
    l.href = l.dataset.href + encodeURIComponent(location.href);
  });
})();
