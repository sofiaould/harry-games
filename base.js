/** @format */

class Base {
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
  crashWith(mechants) {
    return (
      this.bottom() > mechants.top() &&
      this.top() < mechants.bottom() &&
      this.right() > mechants.left() &&
      this.left() < mechants.right()
    );
   
  }
  getPoints(mechants) {
    if (
      /* this.bottom() === mechants.top() &&
      this.top() === mechants.bottom() &&
      this.right() === mechants.left() &&*/
      this.left() === mechants.right()
      //this.x === mechants.x
    ) {
      console.log("harry a dépassé le vilain");
      return points++;
    }
  }
}
