import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMBD_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: "bearer " + TMBD_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url + "?api_key=8873702b13f43c2a49664ab3be214d6f", {
      headers,
      params,
    });

    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
