const baseURL = "";
const localURL = "http://localhost:3000";

export const localConfig = {
  baseURL: localURL,
  timeout: 25000,
};

export const productionConfig = {
  baseURL: baseURL,
  timeout: 25000,
};
