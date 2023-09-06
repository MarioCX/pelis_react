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
  