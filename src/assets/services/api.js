// api.js
export async function fetchShows(query) {
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    if (!response.ok) {
      throw new Error("Error en la solicitud a la API");
    }
    const data = await response.json();
    return data; // Devuelve los datos recuperados
  } catch (error) {
    console.error("Error haciendo fetch", error);
    throw error;
  }
}
export async function fetchShowDetails(id) {
  try {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    if (!response.ok) {
      throw new Error("Error en la solicitud a la API");
    }
    const data = await response.json();
    return data; // Devuelve los detalles del programa recuperados
  } catch (error) {
    console.error("Error haciendo fetch de detalles del programa", error);
    throw error;
  }
}