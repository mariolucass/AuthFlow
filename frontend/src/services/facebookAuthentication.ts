import { api } from "./config/api";

export const initiateFacebookAuthentication = async () => {
  try {
    const result = await api.get("/");
  } catch (error) {
    console.error("Error during Facebook authentication:", error);
  }
};

export default initiateFacebookAuthentication;
