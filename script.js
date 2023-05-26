
let maxTemp = document.getElementById("maxTemp");
let minTemp = document.getElementById("minTemp");
let humidity = document.getElementById("humidity");
let btn = document.getElementById("btn");
let temp = document.getElementById("temp");

const getTemp = () => {
  let first = "https://api.openweathermap.org/data/2.5/weather?q=";
  let third = "&appid=********************&units=metric";
  const city = document.getElementById("city").value;
  const url = first + city + third;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      temp.textContent = data.main.temp + "°C";
      maxTemp.textContent = data.main.temp_max + "°C";
      minTemp.innerHTML = data.main.temp_min + "°C";
      humidity.innerHTML = data.main.humidity + "g/m3";
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

btn.addEventListener("click", () => {
  getTemp();
});







