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
  } catch (error) {
    console.error("Error fetching card data: ", error);
    throw error;
  }
};
