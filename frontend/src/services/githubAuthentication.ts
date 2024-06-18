import { api } from "./config/api";

const initiateGithubAuthentication = async () => {
  try {
    const result = await api.get("/");
  } catch (error) {
    console.error("Error during Github authentication:", error);
  }
};

export default initiateGithubAuthentication;
