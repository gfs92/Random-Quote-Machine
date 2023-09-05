$(document).ready(function () {
  // * Sets the quote when the page loads
  setQuote();
  // * Listens for the new quote button click, on the click, run onclick function below
  $("#generate-quote").on("click", function () {
    onclick();
  })
});

let var_url = "http://localhost:3000/api/random";
$("#game-select").on("change", function () {
  let menu = this.value;
  if (menu == "Elden Ring") {
    var_url = "http://localhost:3000/api/quote/game?title=elden+ring";
  } else if (menu == "Mass Effect 3") {
    var_url = "http://localhost:3000/api/quote/game?title=mass+effect+3";
  } else if (menu == "Animal Crossing: New Horizons") {
    var_url = "http://localhost:3000/api/quote/game?title=animal+crossing+new+horizons";
  } else if (menu == "Horizon Zero Dawn") {
    var_url = "http://localhost:3000/api/quote/game?title=horizon+zero+dawn"
  } else {
    var_url = "http://localhost:3000/api/random";
  }
});

function setQuote() {
  fetch(var_url).then((response) => response.json()).then((data) => {
    $("#text").text('"' + data.quote + '"');
    $("#author").text("-" + data.character);
    $("#game").text(", " + data.title);
    console.log(var_url);
    console.log(data);
  })
  // $.ajax({
  //   url: var_url,
  //   type: "GET",
  //   dataType: "json",
  //   headers: {
  //     accept: "application/json",
  //   },
  //   success: function (data) {
  //     $("#text").text('"' + data.quote + '"');
  //     $("#author").text("-" + data.character);
  //     $("#game").text(", " + data.title);
  //     console.log(var_url);
  //     console.log(data);
  //   },
  //   error: function (xhr, status) {
  //     alert("error");
  //   },
  // });
}
const fadeButton = document.getElementById("generate-quote");
const quoteText = document.getElementById("text");
const authorText = document.getElementById("author");
const gameText = document.getElementById("game");

fadeButton.addEventListener("click", () => {
  quoteText.classList.add("hidden");
  authorText.classList.add("hidden");
  gameText.classList.add("hidden");
  setTimeout(() => {
    quoteText.classList.remove("hidden");
    authorText.classList.remove("hidden");
    gameText.classList.remove("hidden");
  }, 650);
  setTimeout(() => {
    quoteText.classList.add("fade");
    authorText.classList.add("fade");
    gameText.classList.add("fade");
  }, 600);
  setTimeout(() => {
    quoteText.classList.remove("fade");
    authorText.classList.remove("fade");
    gameText.classList.remove("fade");
  }, 2000);
});

function onclick() {
  selectElement = document.querySelector("#game-select")
  output = selectElement.value
  bgColor = ""
  txtColor = ""
  btnColor = ""
  if (output == "Elden Ring") {
    bgColor = "#D7BC2D";
    txtColor = "#D7BC2D";
    btnColor = "#D7BC2D";
  } else if (output == "Mass Effect 3") {
    bgColor = "#3A4E82";
    txtColor = "#3A4E82";
    btnColor = "#3A4E82";
  } else if (output == "Horizon Zero Dawn") {
    bgColor = "#43CAA3";
    txtColor = "#43CAA3";
    btnColor = "#43CAA3";
  } else if (output == "Animal Crossing: New Horizons") {
    bgColor = "#339957";
    txtColor = "#339957";
    btnColor = "#339957";
  } else {
    bgColor = "rgb(3, 128, 211)";
    txtColor = "rgb(3, 128, 211)";
    btnColor = "rgb(3, 128, 211)";
  }
  document.getElementById("generate-quote").style.backgroundColor = btnColor
  document.getElementById("tweet-quote").style.backgroundColor = btnColor
  document.body.style.backgroundColor = bgColor
  document.body.style.color = txtColor
  // * Sets a new quote
  setQuote();
}