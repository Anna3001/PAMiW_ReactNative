import { fetchAPI } from "./movieAPI";

const URL = "http://localhost:3000/";

export const register = async (userData) => {
  const ep = `${URL}api/register`;
  
  constdata = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  };

  const token = fetchAPI(ep, data);
  return token;
};