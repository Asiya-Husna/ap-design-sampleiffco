let mainSection = document.getElementsByClassName("main")[0];
let secondHalf = document.getElementsByClassName("second-half")[0];

let loginPage = document.getElementsByClassName("tawjeeh-page")[0];
let gatePassPage = document.getElementsByClassName("gatePass-page")[0];
let umrahPage = document.getElementsByClassName("umrah-page")[0];
let accoumPage = document.getElementsByClassName("accomodations-page")[0];
let tradePage = document.getElementsByClassName("trade-page")[0];
let firsthalf = document.getElementsByClassName("first-half")[0];

let tawjeeh = false;

const eventHandle = (target) => {
  tawjeeh = true;
  let name = target.getAttribute("name");

  console.log(name);

  if (tawjeeh) {
    mainSection.style.justifyContent = "space-around";
    secondHalf.style.display = "block";
    firsthalf.style.width = "50%";
  }

  // displayNone(name);

  console.log(name);

  switch (name) {
    case "tawjeeh":
      loginPage.style.display = "block";
      gatePassPage.style.display = "none";
      umrahPage.style.display = "none";
      accoumPage.style.display = "none";
      tradePage.style.display = "none";
      firsthalf.style.backgroundColor = "#DE610F1A";
      break;
    case "gatepass":
      loginPage.style.display = "none";
      gatePassPage.style.display = "block";
      umrahPage.style.display = "none";
      accoumPage.style.display = "none";
      tradePage.style.display = "none";
      firsthalf.style.backgroundColor = "#64003526";
      break;
    case "umrah":
      loginPage.style.display = "none";
      gatePassPage.style.display = "none";
      umrahPage.style.display = "block";
      accoumPage.style.display = "none";
      tradePage.style.display = "none";
      firsthalf.style.backgroundColor = "#2B99001A";
      break;
    case "accomSection":
      loginPage.style.display = "none";
      gatePassPage.style.display = "none";
      umrahPage.style.display = "none";
      accoumPage.style.display = "block";
      tradePage.style.display = "none";
      firsthalf.style.backgroundColor = "rgb(182 245 242 / 20%)";
      break;
    case "tradeSection":
      loginPage.style.display = "none";
      gatePassPage.style.display = "none";
      umrahPage.style.display = "none";
      accoumPage.style.display = "none";
      tradePage.style.display = "block";
      firsthalf.style.backgroundColor = "#5E838133 ";
      break;
  }
};
