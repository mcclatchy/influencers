var Influencers = {
  get wrapper() {
    return document.querySelector(".influencer-window");
  },

  get people() {
    return this.wrapper.querySelectorAll(".influencer");
  },

  get current() {
    return this.wrapper.querySelector(".current");
  },

  get currentIndex() {
    return Array.prototype.indexOf.call(this.people, this.current);
  },

  next: function() {
    let i = this.currentIndex + 1;
    if(i >= this.people.length) {
      i = 0;
    }

    this.show(i, "left");
  },

  prev: function() {
    let i = this.currentIndex - 1;
    if(i < 0) {
      i = this.people.length - 1;
    }

    this.show(i, "right");
  },

  show: function(i, animationDirection) {
    let c = this.current;
    let p = this.people[i];

    p.classList.add("current");
    c.classList.remove("current");

    requestAnimationFrame(function() {
      switch(animationDirection) {
        case "left":
          p.classList.add("from-right");
          c.classList.add("to-left");
          break;
        case "right":
          p.classList.add("from-left");
          c.classList.add("to-right");
          break;
      }

      setTimeout(function() {
        c.classList.remove("to-left", "to-right");
        p.classList.remove("from-left", "from-right");
      }, 500);
    });
  }
}

/**
 * Arrow setup
 */

var arrows = document.querySelectorAll(".arrow-nav");
for(let i = 0; i < 2; i++) {
  arrows[i].addEventListener("click", function(e) {
    switch(this.dataset.direction) {
      case "previous":
        Influencers.prev();
        break;
      case "next":
        Influencers.next();
        break;
    }
  });
}


