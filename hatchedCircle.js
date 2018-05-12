hatchedCircle = function (x, y, radius, step, angle) {
  push();
  translate(x, y);
  ellipse(0, 0, radius * 2);
  rotate(angle - 90);
  for (let dist = 0; dist < radius; dist += step) {
    //calculate the angle
    let theta = asin(dist / radius);
    //calculate x,y based on the angle
    let x1 = radius * cos(theta);
    let y1 = radius * sin(theta);
    //get the opposite side of the circle
    let x2 = -1 * x1;
    let y2 = y1;
    //get the corresponding top half line
    let x3 = x1;
    let y3 = -1 * y1;
    let x4 = x2;
    let y4 = -1 * y2;
    //draw the lines
    line(x1, y1, x2, y2);
    //avoid drawing the center line twice in case alpha is used in the stroke color
    if (dist > 0) {
      line(x3, y3, x4, y4);
    }
  }
  pop();
}
