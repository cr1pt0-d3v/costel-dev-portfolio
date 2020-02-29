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
  setTimeout("makeProgress()", 500);
}
