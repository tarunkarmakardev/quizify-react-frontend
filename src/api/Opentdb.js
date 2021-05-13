import axios from "axios";

const categories = axios.create({
  baseURL: "https://opentdb.com/api_category.php",
});

export default axios.create({
  baseURL: "https://opentdb.com/api.php",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    amount: 10,
    type: "multiple",
  },
});

export { categories };
