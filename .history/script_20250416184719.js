// fetch = Function used for making HTTP requests to fetch resources.
//              (JSON style data, images, files)
//              Simplifies asynchronous data fetching in JavaScript and
//              used for interacting with APIs to retrieve and send
//              data asynchronously over the web.
//              fetch(url, {options})

async function fetchData(url) {
  try {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon/typhlosion'
    ); // Fetch data from the URL
  } catch (error) {
    console.error('error');
  }
}
