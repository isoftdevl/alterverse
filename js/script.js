// window.requestAnimFrame = (function () {
//   return (
//     window.requestAnimationFrame ||
//     window.webkitRequestAnimationFrame ||
//     window.mozRequestAnimationFrame ||
//     window.oRequestAnimationFrame ||
//     window.msRequestAnimationFrame ||
//     function (loop) {
//       window.setTimeout(callback, 1000 / 60);
//     }
//   );
// })();

// // First animation
// function animate1() {
//   var c1 = document.getElementById("bg-2");
//   var $1 = c1.getContext("2d");
//   var w1 = (c1.width = window.innerWidth);
//   var h1 = (c1.height = window.innerHeight);
//   var angle1 = 0.666;
//   var max_s1 = w1;
//   run1();

//   function run1() {
//     go1();
//     window.requestAnimFrame(run1);
//   }

//   function go1() {
//     $1.save();
//     $1.translate(w1 / 2, h1 / 2);
//     $1.lineWidth = 2;

//     for (var i = 0; i < 3000; i++) {
//       $1.strokeStyle = "hsla(0,5%, 5%, 0.4)";
//       $1.strokeRect(max_s1 / 2, max_s1 / 2, max_s1, max_s1);
//       $1.rotate(angle1 * Math.PI);
//       $1.scale(0.666, 0.666);
//     }
//     $1.restore();
//     angle1 += 0.666;
//   }
// }

// // Second animation
// function animate2() {
//   var c2 = document.getElementById("canv");
//   var $2 = c2.getContext("2d");
//   var w2 = (c2.width = window.innerWidth);
//   var h2 = (c2.height = window.innerHeight);
//   var msX2;
//   var msY2;
//   var midX2 = w2 / 2;
//   var midY2 = h2 / 2;
//   var num2 = 650;
//   var parts2 = [];
//   var begin2 = 50;
//   var repeat2 = 20;
//   var end2 = Math.PI * 2;
//   var force2 = Math.max(w2, h2) * 0.09;
//   var msdn2 = false;
//   var flow2 = begin2;

//   window.requestAnimFrame(create2);
//   run2();

//   function run2() {
//     window.requestAnimFrame(run2);
//     go2();
//   }

//   function create2() {
//     var n = num2;
//     while (n--) {
//       var p = new Part2();
//       p.deg = Math.floor(Math.random() * 360);
//       p.rad = Math.floor(Math.random() * w2 * 0.5);
//       p.x = p.distX = Math.floor(Math.random() * w2);
//       p.y = p.distY = Math.floor(Math.random() * h2);
//       p.size = 1 + Math.floor(Math.random() * (p.rad * 0.055));
//       parts2[n] = p;
//     }
//     c2.onmousemove = msmv2;
//     c2.onmousedown = msdn2;
//     c2.onmouseup = msup2;

//     var int = setInterval(function () {
//       flow2--;
//       if (flow2 === repeat2) clearInterval(int);
//     }, 20);
//   }

//   function go2() {
//     $2.globalCompositeOperation = "source-over";
//     $2.fillStyle = "hsla(217.5, 16.67%, 18.82%, 1)";
//     $2.fillRect(0, 0, w2, h2);
//     $2.globalCompositeOperation = "lighter";
//     var mx = msX2;
//     var my = msY2;
//     var bounds = force2;
//     if (msdn2) {
//       bounds = force2 * 2;
//     }
//     var n = num2;
//     while (n--) {
//       var p = parts2[n];
//       var radi = (Math.PI / 180) * p.deg;
//       p.distX = midX2 + p.rad * Math.cos(radi);
//       p.distY = midY2 + p.rad * Math.sin(radi) * 0.4;
//       if (mx && my) {
//         var react = Math.floor(bounds * 0.5 + Math.random() * (bounds * 0.9));
//         if (
//           p.distX - mx > 0 &&
//           p.distX - mx < bounds &&
//           p.distY - my > 0 &&
//           p.distY - my < bounds
//         ) {
//           p.distX += react;
//           p.distY += react;
//         } else if (
//           p.distX - mx > 0 &&
//           p.distX - mx < bounds &&
//           p.distY - my < 0 &&
//           p.distY - my > -bounds
//         ) {
//           p.distX += react;
//           p.distY -= react;
//         } else if (
//           p.distX - mx < 0 &&
//           p.distX - mx > -bounds &&
//           p.distY - my > 0 &&
//           p.distY - my < bounds
//         ) {
//           p.distX -= react;
//           p.distY += react;
//         } else if (
//           p.distX - mx < 0 &&
//           p.distX - mx > -bounds &&
//           p.distY - my < 0 &&
//           p.distY - my > -bounds
//         ) {
//           p.distY -= react;
//           p.distY -= react;
//         }
//       }
//       p.x += (p.distX - p.x) / flow2;
//       p.y += (p.distY - p.y) / flow2;
//       var x = p.x;
//       var y = p.y;
//       var s = p.size * ((p.y * 1.5) / h2);
//       if (s < 0.1) {
//         s = 0;
//       }
//       $2.beginPath();
//       $2.fillStyle = p.color;
//       $2.arc(x, y, s, 0, end2, true);
//       $2.fill();
//       $2.closePath();
//       var vary;
//       if (p.size < 2) {
//         vary = 4;
//       } else if (p.size < 3) {
//         vary = 3;
//       } else if (p.size < 4) {
//         vary = 2;
//       } else {
//         vary = 1;
//       }
//       vary *= p.y / (h2 * 0.9);
//       p.deg += vary;
//       p.deg = p.deg % 360;
//     }
//   }

//   function msmv2(e) {
//     var p = getPos2(e.target);
//     var sX = window.pageXOffset;
//     var sY = window.pageYOffset;
//     msX2 = e.clientX - p.x + sX;
//     msY2 = e.clientY - p.y + sY;
//   }

//   function msdn2(e) {
//     msdn2 = true;
//   }

//   function msup2(e) {
//     msdn2 = false;
//   }

//   function getPos2(el) {
//     var cosmo = {};
//     cosmo.x = el.offsetLeft;
//     cosmo.y = el.offsetTop;
//     while (el.offsetParent) {
//       el = el.offsetParent;
//       cosmo.x += el.offsetLeft;
//       cosmo.y += el.offsetTop;
//     }
//     return cosmo;
//   }

//   function Part2() {
//     this.deg = 0;
//     this.rad = 0;
//     this.x = 0;
//     this.y = 0;
//     this.distX = 0;
//     this.distY = 0;
//     this.color =
//       "rgb(" +
//       Math.floor(Math.random() * 130) +
//       "," +
//       Math.floor(Math.random() * 50) +
//       "," +
//       Math.floor(Math.random() * 100) +
//       ")";
//     this.size;
//   }
// }

// animate1();
// animate2();

// 
var c = document.getElementById("canv");
c.width = window.innerWidth;
c.height = window.innerHeight;

var $ = c.getContext("2d");
var i = 0;
var tri = {
  obj: {
    num: 6,
    step: Math.PI / 60,
    rad: 210,
  },

  draw_: function ($) {
    $.globalCompositeOperation = "lighter";
    var rot = ((Math.sin(5) * 360) / Math.cos(12)) * Math.PI * 5;
    for (var n = 0; n < 2; ++n) {
      $.beginPath();
      $.rotate(rot);
      $.fillStyle = "hsla(" + i * n + ", 95%, 50%,1)";
      $.arc(90, 90, 8, 0, Math.PI * 2);
      $.closePath();
      $.fill();

      $.beginPath();
      $.rotate(rot);
      $.fillStyle = "hsla(" + i * 5 + ", 95%, 50%,1)";
      $.arc(20, 20, 2, 0, Math.PI * 2);
      $.closePath();
      $.fill();
    }
    for (var n = 0; n < 3; ++n) {
      $.fillStyle = "hsla(" + i * n + ",95%, 40%,1)";
      $.rotate(rot);
      $.arc(60, 10, 4, 0, Math.PI * 2);
      $.fill();
      $.closePath();
    }
  },
};

function Obj(mid, off_, step) {
  this.mid = mid;
  this.off_ = off_;
  this.step = step;
}

Obj.prototype.draw = function ($) {
  this.step += tri.obj.step;
  $.save();
  $.translate(this.mid.x, this.mid.y);
  $.rotate(this.step + this.off_);
  tri.draw_($);
  $.restore();
};

var arr = [];
for (var i = 0; i < tri.obj.num; i++) {
  var t = (i * Math.PI * 5) / tri.obj.num;
  arr.push(
    new Obj(
      {
        x: c.width / 2 + tri.obj.rad * Math.cos(t * 2),
        y: c.height / 2 + tri.obj.rad * Math.sin(t * 2),
      },
      t,
      Math.PI * 2 * i
    )
  );
}

var go = function () {
  $.save();

  $.fillStyle = "hsla(0,0%,0%,.1)";
  $.fillRect(0, 0, c.width, c.height);

  for (var i in arr) {
    arr[i].draw($);
  }
  $.restore();
};

var run = function () {
  window.requestAnimationFrame(run);
  go();
  i -= 0.5;
};

window.addEventListener(
  "resize",
  function () {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
  },
  false
);

run();