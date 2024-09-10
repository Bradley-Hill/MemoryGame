import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.scryfall.com",
  headers: {
    "User-Agent": "Magic Memory Game/1.0",
    Accept: "application/json",
  },
});

export const fetchCardData = async (cardName: string) => {
  try {
    const response = await apiClient.get(`/cards/named`, {
      params: {
        fuzzy: cardName,
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Error fetching card data:", error.response.data);
      throw new Error(
        `Error fetching card data: ${error.response.data.details}`
      );
    } else if (error.request) {
      // The request was made but no response was received
      console.error(
        "Error fetching card data: No response received",
        error.request
      );
      throw new Error("Error fetching card data: No response received");
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error fetching card data:", error.message);
      throw new Error(`Error fetching card data: ${error.message}`);
    }
  }
};
