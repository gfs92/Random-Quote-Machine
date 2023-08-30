$(document).ready(function () {
  // * Sets the quote when the page loads
  setQuote();
  // * Listens for the new quote button click, on the click, run onclick function below
  $("#generate-quote").on("click", onclick);
});

function onclick() {
  // * Sets a new quote
  setQuote();
}

function setQuote() {
  // * API call using the ajax method in jQuery
  $.ajax({
    // * Settings that are used to send the API call
    url: "http://localhost:3000/api/random",
    type: "GET",
    dataType: "json",
    headers: {
      accept: "application/json",
    },
    // * What happens after the API call comes back if it's successful
    success: function (data) {
      $("#text").text('"' + data.quote + '"');
      $("#author").text("-" + data.character);
      $("#game").text(", " + data.title);
      // data is a quote in JSON form
      //   {
      //     "id": 307,
      //     "quote": "1998... I'll never forget it... It was the year when those grisly murders occurred in the Arklay Mountains.",
      //     "character": "Leon Kennedy",
      //     "title": "Resident Evil 4",
      //     "esrb": "M",
      //     "release": 2005
      // }
      console.log(data);
    },
    // * What happens if the API call fails
    error: function (xhr, status) {
      alert("error");
    },
  });
}
