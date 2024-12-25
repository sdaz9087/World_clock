function updateTime() {
  let TehranElement = document.querySelector("#Tehran");
  if (TehranElement) {
    let TehranDateElement = TehranElement.querySelector(".date");
    let TehranTimeElement = TehranElement.querySelector(".time");
    let TehranTimeData = moment().tz("Asia/Tehran");

    TehranDateElement.innerHTML = TehranTimeData.format("dddd, MMMM Do, YYYY");
    TehranTimeElement.innerHTML = TehranTimeData.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let torontoElement = document.querySelector("#toronto");
  if (torontoElement) {
    let torontoDateElement = torontoElement.querySelector(".date");
    let torontoTimeElement = torontoElement.querySelector(".time");
    let torontoTimeData = moment().tz("America/Toronto");

    torontoDateElement.innerHTML = torontoTimeData.format(
      "dddd, MMMM Do, YYYY"
    );
    torontoTimeElement.innerHTML = torontoTimeData.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let IrelandElement = document.querySelector("#Ireland");
  if (IrelandElement) {
    let IrelandDateElement = IrelandElement.querySelector(".date");
    let IrelandTimeElement = IrelandElement.querySelector(".time");
    let IrelandTimeData = moment().tz("Europe/Dublin");

    IrelandDateElement.innerHTML = IrelandTimeData.format(
      "dddd, MMMM Do, YYYY"
    );
    IrelandTimeElement.innerHTML = IrelandTimeData.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
   <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("dddd, MMMM Do, YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")}<small> ${cityTime.format(
    "A"
  )}</small>
      </div>
   </div>
   </br>
   <a href="/"><small>Back to all cities</small></a>
 `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
