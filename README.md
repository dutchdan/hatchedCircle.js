# hatchedCircle.js
A function to draw a circle filled with hatched lines using the p5.js library.

### Calling the function.
```javascript
hatchedCircle(x,y,radius,step,angle);
```
Call the function passing the following parameters:
* the _**x**_-position of the center of the circle,
* the _**y**_-position of the center of the circle,
* the _**radius**_ of the circle,
* the distance between the hatched lines (_**step**_) in pixels,
* the _**angle**_ of the hatched lines in degrees( from the top of the circle).

### Other information.
* Inside the function `push()` and `pop()` are used to stop it interfering with the surrounding p5.js code as it uses `translate()` and `rotate()`.
* remember to use `noFill()` before calling the function otherwise the hatched lines won't be visible.
* to use: copy and paste into your code or link to the file in the index.html.
