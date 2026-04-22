async function getWeather() {
    const city = document.getElementById("city").value;

    const res = await fetch(`/weather?city=${city}`);
    const data = await res.json();

    const result = document.getElementById("result");
    
    if(data.error){
        result.innerHTML = "City not found";
        return;
    }

    console.log(data);

    result.innerHTML = `
    <h2>${data.name}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
  `;
}