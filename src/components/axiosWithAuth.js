import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("key");

  return axios.create({
    baseURL: "https://mud5.herokuapp.com/api",
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

export default axiosWithAuth;
