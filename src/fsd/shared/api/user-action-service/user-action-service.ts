import { createAuthHeader } from "@shared/utils";
import axios from "axios";

class UserActions {
  private baseURL = `http://${process.env.NEXT_PUBLIC_DOMAIN_NAME}:${process.env.NEXT_PUBLIC_ARTS_AND_TAGS_PORT}/arts/`;

  async addToFavorites(id: number) {
    try {
      await axios.post(
        this.baseURL + "save",
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
      await axios.delete(this.baseURL + "save", {
        headers: createAuthHeader(),
        data: { art_id: id },
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  async likeIt(id: number) {
    const data = await axios.post(
      this.baseURL + "like",
      { art_id: id },
      { headers: createAuthHeader() }
    );

    return data;
  }

  async removeLike(id: number) {
    const data = await axios.delete(this.baseURL + "like", {
      headers: createAuthHeader(),
      data: { art_id: id },
    });

    return data;
  }
}

export const userActionsService = new UserActions();
