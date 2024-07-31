class Slider {
  constructor(slides = [], currentIndex = 0) {
    this._slides = slides;
    this.currentIndex = currentIndex;
  }
  get currentIndex() {
    return this._currentIndex;
  }
  set currentIndex(value) {
    if (
      typeof value !== "number" ||
      Number.isInteger(value) === false ||
      value < 0
    ) {
      throw new AggregateError("must be positive integer");
    }
    this._currentIndex = value;
  }
  get currentSlide() {
    return this._slides[this._currentIndex];
  }
  prev() {
    return (this._currentIndex -1 +this._slides.length)% this._slides.length;
  }
  next() {
return (this._currentIndex +1)% this._slides.length;
  }
}
