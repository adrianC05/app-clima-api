// https://api.openweathermap.org/data/2.5/weather?q=London&appid

const api_key = "52bb727023dccfee32f35231b2eac087";
const url_base = "https://api.openweathermap.org/data/2.5/weather";
// Convertir grados kelvin a celsius
const KelvinToCelsius = 273.15;

document.getElementById("botonBusqueda").addEventListener("click", () => {
  const city = document.getElementById("ciudadEntrada").value;

  if (city) {
    fetchDatosClima(city);
  } else {
    alert("Ingrese una ciudad");
  }
});

function fetchDatosClima(city) {
  fetch(`${url_base}?q=${city}&appid=${api_key}`)
    .then((data) => data.json())
    .then((data) => mostrarDatos(data));
}

function mostrarDatos(data) {
  //console.log(data);
  const divDatosClima = document.getElementById("datosClima");
  divDatosClima.innerHTML = "";

  const ciudadNombre = data.name;
  const paisNombre = data.sys.country;
  const temperatura = Math.round(data.main.temp - KelvinToCelsius);
  const humedad = data.main.humidity;
  const descripcion = data.weather[0].description;

  const ciudadTitulo = document.createElement("h2");
  ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`;

  const temperaturaInfo = document.createElement("p");
  temperaturaInfo.textContent = `Temperatura: ${temperatura} °C`;

  const humedadInfo = document.createElement("p");
  humedadInfo.textContent = `Humedad: ${humedad}%`;

  const descripcionInfo = document.createElement("p");
  descripcionInfo.textContent = `Descripción: ${descripcion}`;

  divDatosClima.appendChild(ciudadTitulo);
  divDatosClima.appendChild(temperaturaInfo);
  divDatosClima.appendChild(humedadInfo);
  divDatosClima.appendChild(descripcionInfo);
}
