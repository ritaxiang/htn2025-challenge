// For getting events data from the API and displaying it on the page.

import axios from "axios";
import { TEvent } from "../types/events";

const API_URL = "https://api.hackthenorth.com/v3/events";

export const fetchEvents = async (): Promise<TEvent[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchEventById = async (id: number): Promise<TEvent> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
