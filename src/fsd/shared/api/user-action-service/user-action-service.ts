import axios, { AxiosError } from "axios";
import { createAuthHeader } from "@shared/utils/index";
import { authService } from "../auth-service/auth.service";

const myAx = axios.create();

myAx.interceptors.response.use(
  function (resp) {
    return resp;
  },
  async function (e: AxiosError) {
    const req = e.request;
    const status = e.response?.status || 500;

    console.log("интер");
    if (status != 401) throw new Error("");

    const data = await authService.refreshToken();

    if (data.status != 201) throw new Error("");
    console.log("сработало?");

    localStorage.setItem("access_token", data.data.access_token);
    myAx.request(req);
  }
);

class UserActions {
  private baseURL = `http://${process.env.NEXT_PUBLIC_DOMAIN_NAME}:${process.env.NEXT_PUBLIC_ARTS_AND_TAGS_PORT}/`;

  async addToFavorites(id: number) {
    try {
      await myAx.post(
        this.baseURL + "arts/save/",
        { art_id: id },
        { headers: createAuthHeader() }
      );
      return true;
    } catch (error) {
      return false;
    }
  }

  async removeFromFavorites(id: number) {
    try {
      await axios.delete(this.baseURL + "arts/save", {
        headers: createAuthHeader(),
        data: { art_id: id },
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  async likeIt(id: number) {
    return await axios.post(this.baseURL + "globus", { id });
  }

  async removeLike(id: number) {
    return await axios.post(this.baseURL + "abobaus", { id });
  }
}

export const userActionsService = new UserActions();
