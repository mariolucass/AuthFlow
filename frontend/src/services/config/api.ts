import axios from "axios";
import { localConfig } from "./defaultOptions";

export const api = axios.create(localConfig);
