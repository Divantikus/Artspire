import axios, { AxiosError } from "axios";
import { authService } from "@shared/api";

const axiosWithInterceptors = axios.create();

axiosWithInterceptors.interceptors.response.use(
  function (resp) {
    return resp;
  },
  async function (e: AxiosError) {
    const req = e.request;
    const status = e.response?.status;
    e.request.isFirst = true;

    if (status != 401 || !isFinite) throw new Error("");

    const data = await authService.refreshToken();

    if (data.status != 201) throw new Error("");

    localStorage.setItem("access_token", data.data.access_token);
    return await axiosWithInterceptors.request(req);
  }
);

export { axiosWithInterceptors };
