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

  function handleHashChange() {
    let newTarget = document.querySelector(location.hash);
    let adjustment = 0;

    if(flag.classList.contains("down")) {
      adjustment -= 60;
    }

    if(newTarget.classList.contains("influencer")) {
      if(newTarget.classList.contains("animate-in")) {
        adjustment -= 80;
      }
    }

    window.scrollBy(0, adjustment)
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
    let rect = influencers[i].getBoundingClientRect();
    if(rect.top > 0) {
      influencers[i].classList.add("animate-in");
      cardObserver.observe(influencers[i]);
    }
  }

  /**
   * Social Media
   */

  let smlinks = document.querySelectorAll(".project-social-link");
  smlinks.forEach(l => {
    l.href = l.dataset.href + encodeURIComponent(location.href);
  });
})();
