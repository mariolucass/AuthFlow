import { api } from "./config/api";

const initiateGoogleAuthentication = async () => {
  try {
    const result = await api.get("/");
  } catch (error) {
    console.error("Error during Google authentication:", error);
  }
};

export default initiateGoogleAuthentication;
