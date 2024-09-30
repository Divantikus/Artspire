import { createAuthHeader } from "@shared/utils/index";
import axios from "axios";

//! Это всё заглушка

class UserActions {
  private baseURL = `http://${process.env.NEXT_PUBLIC_DOMAIN_NAME}:${process.env.NEXT_PUBLIC_ARTS_AND_TAGS_PORT}/`;

  async addToFavorites(id: number) {
    console.log("отсутствуют".toUpperCase());

    const data = await axios.post(this.baseURL + "arts/save/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      data: { art_id: id },
    });

    console.log(data);
    return data;
  }

  async removeFromFavorites(id: number) {
    const data = await axios.delete(this.baseURL + "arts/save", {
      headers: createAuthHeader(),
      data: { art_id: id },
    });
    console.log(data);
    return data;
  }

  async likeIt(id: number) {
    return await axios.post(this.baseURL + "globus", { id });
  }

  async removeLike(id: number) {
    return await axios.post(this.baseURL + "abobaus", { id });
  }
}

export const userActionsService = new UserActions();
