import axios from "axios";

const matsuriAPI = "https://mltd.dovahkiin.top/";
const funcAPI = "https://mltd-api.dovahkiin.top/.netlify/functions/server";

export const matsuriReq = axios.create({
  baseURL:matsuriAPI,
  timeout:60000,
})

export const funcReq = axios.create({
  baseURL:funcAPI,
  timeout:60000,
})