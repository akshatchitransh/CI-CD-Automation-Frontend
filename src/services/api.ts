import axios from "axios";

const api = axios.create({

  baseURL: "https://cicd-automation-back.onrender.com",

});

export default api;