export const API_URL =
  process.env.NODE_ENV == "development"
    ? "http://0.0.0.0:8000"
    : "https://gpminerals.org";
export default API_URL;
