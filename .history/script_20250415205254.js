// fetch = Function used for making HTTP requests to fetch resources.
//              (JSON style data, images, files)
//              Simplifies asynchronous data fetching in JavaScript and
//              used for interacting with APIs to retrieve and send
//              data asynchronously over the web.
//              fetch(url, {options})

fetch('https://pokeapi.co/api/v2/pokemon/spongebob')
  .then((response) => console.log(response)) // Log the response object to the console
  .then((data) => console.log(data.id))
  .catch((error) => console.error(error));
