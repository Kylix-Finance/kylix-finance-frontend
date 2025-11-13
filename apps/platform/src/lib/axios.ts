import axios from "axios";
import { ENV } from "~/config/env";

const instance = axios.create({
  baseURL: ENV.REST_ENDPOINT,
  adapter: "fetch",
});

export default instance;
