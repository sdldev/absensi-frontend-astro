//import axios
import axios from "axios";

const api = axios.create({
//   set default endpoint API
  // baseURL: "http://127.0.0.1:8000",
  baseURL: "https://absensi.mtsn1lampungselatan.sch.id/",
});

export default api;