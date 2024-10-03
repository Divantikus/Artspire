import { createAuthHeader } from "@shared/utils/index";
import axios from "axios";

class UserActions {
  private baseURL = `http://${process.env.NEXT_PUBLIC_DOMAIN_NAME}:${process.env.NEXT_PUBLIC_ARTS_AND_TAGS_PORT}/`;

  async addToFavorites(id: number) {
    try {
      await axios.post(
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
