import axios from "axios";

const ROOT_API = process.env.REACT_APP_API;
// const LIMIT = 'rows?limit=7&offset=0&$order=asc';

export async function getDetailsProduct() {
  const URL = "items";

  const response = await axios.get(`${ROOT_API}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.nodes;
}
