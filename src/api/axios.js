import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3001/api/",
    withCredentials: true  // Include credentials in all requests
});