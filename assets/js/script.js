/* Dinamic Progress Bar */
let i = 0;
function makeProgress() {
  if (i < 90) {
    i = i + 1;
    $(".html-bar").css("width", i + "%");
  }
  if (i < 75) {
    i = i + 1;
    $(".css-bar").css("width", i + "%");
  }
  if (i < 50) {
    i = i + 1;
    $(".bootstrap-bar").css("width", i + "%");
  }
  if (i < 65) {
    i = i + 1;
    $(".javascript-bar").css("width", i + "%");
  }
  if (i < 80) {
    i = i + 1;
    $(".jquery-bar").css("width", i + "%");
  }
  if (i < 35) {
    i = i + 1;
    $(".react-bar").css("width", i + "%");
  }
  setTimeout("makeProgress()", 300);
}
/* ********************************************** */

/* Smooth Scrolling */
$(function() {
  var navLink = $("li a");
  navLink.on("click", function(event) {
    event.preventDefault();
    var target = $(this).attr("href");
    var top = $(target).offset().top;
    $("html, body").animate({ scrollTop: top }, 700);
  });
});
/* ********************************************** */
/*  */
$(document).ready(function() {
  var entries = [
    {
      image: "./assets/vectorPL/bootstrap.png",
      width: "70",
      height: "70",
      target: "_top"
    },
    {
      image: "./assets/vectorPL/code.png",
      width: "70",
      height: "70",
      target: "_top"
    },
    {
      image: "./assets/vectorPL/css3.png",
      width: "70",
      height: "70",
      target: "_top"
    },
    {
      image: "./assets/vectorPL/git.png",
      width: "70",
      height: "70",
      target: "_top"
    },
    {
      image: "./assets/vectorPL/html5.png",
      width: "70",
      height: "70",
      target: "_top"
    },
    {
      image: "./assets/vectorPL/javascript.png",
      width: "70",
      height: "70",
      target: "_top"
    },
    {
      image: "./assets/vectorPL/jquery.png",
      width: "70",
      height: "70",
      target: "_top"
    },
    {
      image: "./assets/vectorPL/mongodb.png",
      width: "70",
      height: "70",
      target: "_top"
    },
    {
      image: "./assets/vectorPL/mysql.png",
      width: "70",
      height: "70",
      target: "_top"
    },
    {
      image: "./assets/vectorPL/nodejs.png",
      width: "70",
      height: "70",
      target: "_top"
    },
    {
      image: "./assets/vectorPL/reactjs.png",
      width: "70",
      height: "70",
      target: "_top"
    },
    {
      image: "./assets/vectorPL/vscode.png",
      width: "70",
      height: "70",
      target: "_top"
    },
    {
      image: "./assets/vectorPL/bootstrap.png",
      width: "70",
      height: "70",
      target: "_top"
    },
    {
      image: "./assets/vectorPL/code.png",
      width: "70",
      height: "70",
      target: "_top"
    },
    {
      image: "./assets/vectorPL/css3.png",
      width: "70",
      height: "70",
      target: "_top"
    },
    {
      image: "./assets/vectorPL/git.png",
      width: "70",
      height: "70",
      target: "_top"
    },
    {
      image: "./assets/vectorPL/html5.png",
      width: "70",
      height: "70",
      target: "_top"
    },
    {
      image: "./assets/vectorPL/javascript.png",
      width: "70",
      height: "70",
      target: "_top"
    },
    {
      image: "./assets/vectorPL/jquery.png",
      width: "70",
      height: "70",
      target: "_top"
    },
    {
      image: "./assets/vectorPL/mongodb.png",
      width: "70",
      height: "70",
      target: "_top"
    },
    {
      image: "./assets/vectorPL/mysql.png",
      width: "70",
      height: "70",
      target: "_top"
    },
    {
      image: "./assets/vectorPL/nodejs.png",
      width: "70",
      height: "70",
      target: "_top"
    },
    {
      image: "./assets/vectorPL/reactjs.png",
      width: "70",
      height: "70",
      target: "_top"
    },
    {
      image: "./assets/vectorPL/vscode.png",
      width: "70",
      height: "70",
      target: "_top"
    }
  ];

  var settings = {
    entries: entries,
    width: 780,
    height: 780,
    radius: "80%",
    radiusMin: 75,
    bgDraw: true,
    bgColor: "transparent",
    opacityOver: 1.0,
    opacityOut: 0.1,
    opacitySpeed: 6,
    fov: 800,
    speed: 1
  };

  //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
  $("#holder").svg3DTagCloud(settings);
});
/*  */
