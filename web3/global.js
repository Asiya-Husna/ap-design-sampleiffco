window.addEventListener("resize", function () {
    const boxImage = document.getElementById("responsiveBox");
    const width = boxImage.clientWidth;
    boxImage.style.height = width + "px";
  });

  // Initialize the height based on the initial width
  window.addEventListener("load", function () {
    const boxImage = document.getElementById("responsiveBox");
    const width = boxImage.clientWidth;
    boxImage.style.height = width + "px";
  });

  // vector module image
  // JavaScript to make the height equal to the width
  window.addEventListener("resize", function () {
    const moduleImage = document.getElementById("responsiveboxmodule");
    const width = moduleImage.clientWidth;
    moduleImage.style.height = width + "px";
  });

  // Initialize the height based on the initial width
  window.addEventListener("load", function () {
    const moduleImage = document.getElementById("responsiveboxmodule");
    const width = moduleImage.clientWidth;
    moduleImage.style.height = width + "px";
  });

  const tawjeehmain = document.getElementById("tawjeehSection");
  tawjeehmain.addEventListener("click", () => {
    document.querySelector("#responsiveboxmodule").style.cssText =
      "display: block; ";
    document.querySelector("#loginIffco").style.cssText =
      "display: block; ";

    console.log("hello");
  });