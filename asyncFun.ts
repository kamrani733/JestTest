import axios from "axios";

interface Person {
  name: string;
}

const swapiGetter = async (id: string): Promise<string> => {
  try {
    const response = await axios.get<Person>(
      `https://swapi.dev/api/people/${id}/`
    );
    return response.data.name;
  } catch (err) {
    console.error("Error fetching SWAPI data:", err);
    throw err;
  }
};

export default swapiGetter;
