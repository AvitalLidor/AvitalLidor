import axios from "axios";
import { toast } from "react-toastify";
import userService from "./userService";

axios.defaults.headers.common["x-auth-token"] = userService.getJwt();

axios.interceptors.response.use(null, (error) => {
  const exptedError = error.response && error.response.status >= 403;
  if (exptedError) toast.error("An unexpcted error occurred");
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
