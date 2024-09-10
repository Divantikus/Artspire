import axios from "axios";
import { Tag } from "@shared/api/index";

class ArtsApi {
  private baseURL = `http://${process.env.NEXT_PUBLIC_DOMAIN_NAME}:${process.env.ARTS_AND_TAGS_PORT}/arts/tags/`;

  async getTags(tagName: string) {
    return await axios.get<Tag[]>(this.baseURL + "?tag_name=" + tagName);
  }
}
export const artsService = new ArtsApi();
