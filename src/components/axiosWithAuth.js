import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("key");

  return axios.create({
    baseURL: "https://lambda-mud-test.herokuapp.com/api",
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

export default axiosWithAuth;
