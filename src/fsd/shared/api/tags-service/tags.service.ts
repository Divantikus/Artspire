import axios from "axios";
import { SelectOptions } from "../../ui";

const BASEURL = `http://${process.env.NEXT_PUBLIC_DOMAIN_NAME}:${process.env.NEXT_PUBLIC_ARTS_AND_TAGS_PORT}/arts/tags`;

class TagsService {
  async getTags(tagName: string): Promise<SelectOptions[]> {
    try {
      const data = await axios.get<SelectOptions[]>(
        BASEURL + "?tag_name=" + tagName
      );
      console.log(data);

      return data.data;
    } catch (e) {
      return [{ label: "Ошибка сервера", value: "" }];
    }
  }
}

export const tagsService = new TagsService();
