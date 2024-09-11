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
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error("Error fetching card data:", error.response.data);
        throw new Error(
          `Error fetching card data: ${error.response.data.details}`
        );
      } else if (error.request) {
        console.error(
          "Error fetching card data: No response received",
          error.request
        );
        throw new Error("Error fetching card data: No response received");
      } else {
        console.error("Error fetching card data:", error.message);
        throw new Error(`Error fetching card data: ${error.message}`);
      }
    }
  }
};
