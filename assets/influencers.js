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

    window.setTimeout(function() {
      c.classList.remove("to-left", "to-right");
      p.classList.remove("from-left", "from-right");
    }, 500);
  },

  setup: function() {
    document.querySelector(".arrow-nav[data-direction=next]").addEventListener("click", this.next.bind(this));
    document.querySelector(".arrow-nav[data-direction=previous]").addEventListener("click", this.prev.bind(this));
  }
}

Influencers.setup();
