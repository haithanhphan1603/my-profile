import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://phanthanhhai.site/`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getBlogs() {
    return apiClient.get("/blogs");
  },
  getBlog(id) {
    return apiClient.get("/blogs/" + id);
  },
};
