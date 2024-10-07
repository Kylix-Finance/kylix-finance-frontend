import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REST_ENDPOINT,
  adapter: "fetch",
});

export default instance;
