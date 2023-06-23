class SlideStories1 {
  constructor(id) {
    this.slide = document.querySelector(`[data-slide="${id}"]`);
    this.active = 0;
    this.init();
  }

  activeSlide(index) {
    this.active = index;
    this.items.forEach((item) => item.classList.remove("active"));
    this.items[index].classList.add("active");
    this.thumbItems.forEach((item) => item.classList.remove("active"));
    this.thumbItems[index].classList.add("active");
    this.autoSlide();
  }

  prev() {
    if (this.active > 0) {
      this.activeSlide(this.active - 1);
    } else {
      this.activeSlide(this.items.length - 1);
    }
  }

  next() {
    if (this.active < this.items.length - 1) {
      this.activeSlide(this.active + 1);
    } else {
      this.activeSlide(0);
    }
  }

  addNavigation() {
    const nextBtn = this.slide.querySelector(".slide-next");
    const prevBtn = this.slide.querySelector(".slide-prev");
    nextBtn.addEventListener("click", this.next);
    prevBtn.addEventListener("click", this.prev);
  }

  addThumbItems() {
    this.items.forEach(() => (this.thumb.innerHTML += `<span></span>`));
    this.thumbItems = Array.from(this.thumb.children);
  }

  autoSlide() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.next, 10000);
  }

  init() {
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.items = this.slide.querySelectorAll(".slide-items > *");
    this.thumb = this.slide.querySelector(".slide-thumb");
    this.addThumbItems();
    this.activeSlide(0);
    this.addNavigation();
  }
}

new SlideStories1("slide1");
new SlideStories1("slide2");
new SlideStories1("slide3");
new SlideStories1("slide4");
new SlideStories1("slide5");
new SlideStories1("slide6");
new SlideStories1("slide7");
new SlideStories1("slide8");
new SlideStories1("slide9");
new SlideStories1("slide10");
new SlideStories1("slide11");
new SlideStories1("slide12");
new SlideStories1("slide13");
new SlideStories1("slide14");
new SlideStories1("slide15");
new SlideStories1("slide16");
new SlideStories1("slide17");
new SlideStories1("slide18");
new SlideStories1("slide19");
new SlideStories1("slide20");
new SlideStories1("slide21");
new SlideStories1("slide22");
new SlideStories1("slide23");
new SlideStories1("slide24");
