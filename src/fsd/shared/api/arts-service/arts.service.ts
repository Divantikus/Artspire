import { PublicationData, ShortArtInfo } from "@shared/api/index";
import axios, { AxiosError } from "axios";
import { createAuthHeader } from "@shared/utils/index";

class ArtsApi {
  private baseURL = `http://${process.env.NEXT_PUBLIC_DOMAIN_NAME}:${process.env.NEXT_PUBLIC_ARTS_AND_TAGS_PORT}/arts/`;

  private async getOneArtRequest(id: number, withHeaders?: boolean) {
    const data = await axios.get<[PublicationData]>(
      this.baseURL + `?art_id=` + id + "&include_tags=true",
      { headers: withHeaders ? createAuthHeader() : undefined }
    );
    return data.data;
  }

  async getOneArt(id: number) {
    try {
      return await this.getOneArtRequest(id, true);
    } catch (e) {
      const error = e as AxiosError<[PublicationData]>;
      if (error.status !== 401) throw new Error("my");
      return await this.getOneArtRequest(id);
    }
  }

  async getArts(offset: number, limit: number) {
    const data = await axios.get<ShortArtInfo[]>(
      this.baseURL + `?offset=${offset}&` + `limit=${limit}`
    );

    return data.data;
  }

  async getSavedPublications(offset: number, limit: number) {
    const data = await axios.get<PublicationData[]>(
      this.baseURL + "save/" + `?offset=${offset}&` + `limit=${limit}`,
      { headers: createAuthHeader() }
    );

    return data.data;
  }

  async createArt(img: File, title: string, tags: string) {
    const data = await axios.postForm<PublicationData>(
      this.baseURL + "?" + `art_tags=${tags}` + `&art_title${title}`,
      { art_file: img },
      { headers: createAuthHeader() }
    );

    return data;
  }

  async deleteArt(id: number) {
    const data = await axios.delete(this.baseURL, {
      data: { art_id: id },
      headers: createAuthHeader(),
    });
    console.log(data);
  }
}

export const artsService = new ArtsApi();
