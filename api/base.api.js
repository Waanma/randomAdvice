import axios from "axios";

const BASE_URL = "https://api.adviceslip.com/"; // <- (https://api.adviceslip.com/advice) para obtener un advice aleatorio

const adviceApi = axios.create({
    baseURL: BASE_URL,
})

export default adviceApi;