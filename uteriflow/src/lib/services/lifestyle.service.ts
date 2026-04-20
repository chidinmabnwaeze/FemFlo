import { api } from "../api";

export const lifestyleService = {
  getLifestyle: async () => {
    const response = await api.get("/lifestyle");
    return response.data;
  },
  getLifestyleById: async (id: string) => {
    const response = await api.get(`/lifestyle/${id}`);
    return response.data;
  },
};
