import { createAuthHeader } from "@shared/utils/index";
import { PublicationData } from "@shared/api/arts-service/artsTypes";
import axios from "axios";

class ArtsApi {
  private baseURL = `http://${process.env.NEXT_PUBLIC_DOMAIN_NAME}:${process.env.NEXT_PUBLIC_ARTS_AND_TAGS_PORT}/arts/`;

  async getOneArt(id: number) {
    const data = await axios.get<[PublicationData]>(
      this.baseURL + `?art_id=` + id + "&include_tags=true"
    );

    return data.data;
  }

  async getArts(offset: number, limit: number) {
    const data = await axios.get<PublicationData[]>(
      this.baseURL + `?offset=${offset}&` + `limit=${limit}`
    );

    return data.data;
  }

  async getSavedPublications(offset: number, limit: number) {
    const data = await axios.get<PublicationData[]>(
      this.baseURL + "save/" + `?offset=${offset}&` + `limit=${limit}`,
      {
        headers: createAuthHeader(),
      }
    );

    return data.data;
  }
}
export const artsService = new ArtsApi();
