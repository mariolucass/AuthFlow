import { api } from "./config/api";

const initiateAppleAuthentication = async () => {
  try {
    const result = await api.get("/");
  } catch (error) {
    console.error("Error during Apple authentication:", error);
  }
};

export default initiateAppleAuthentication;
