const apiKey = '1b0d4e056d91c25a4fe8658fd55f3f06';
const city = 'Baguio';

const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

axios
  .get(url)
  .then((response) => {
    // console.log(response.data);
    console.log('Weather Data:', response.data);
  })
  .catch((error) => {
    console.error(error);
  });
