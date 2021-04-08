import axios from "axios";

export const getProperty = async (url) => {
  const response = await axios
    .get(`https://rpback.com/api/games/${url}?project_id=2`);
  
  const { data } = response;

  return data;
}
