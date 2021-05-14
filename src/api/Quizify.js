import axios from "axios";
// process.env.REACT_APP_BACKEND_URL
export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
