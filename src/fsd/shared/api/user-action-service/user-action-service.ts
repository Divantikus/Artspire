import axios from "axios";

//! Это всё заглушка

class UserActions {
  private baseURL = `http://${process.env.NEXT_PUBLIC_DOMAIN_NAME}:${process.env.NEXT_PUBLIC_PORT}/api/`;

  async addToFavorites(id: number) {
    return axios.post(this.baseURL + "add-to-favorites", { id });
  }

  async removeFromFavorites(id: number) {
    return axios.post(this.baseURL + "remove-from-favorite", { id });
  }
}

export const userActionsService = new UserActions();
