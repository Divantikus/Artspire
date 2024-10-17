import { SelectOptions, SelectOptionsFromServer } from "@shared/ui/index";
import axios from "axios";

class TagsService {
  private baseURL = `http://${process.env.NEXT_PUBLIC_DOMAIN_NAME}:${process.env.NEXT_PUBLIC_ARTS_AND_TAGS_PORT}/arts/tags/`;

  async getTags(tagName: string): Promise<SelectOptions[]> {
    try {
      const data = await axios.get<SelectOptionsFromServer[]>(
        this.baseURL + "search" + "?tag_part=" + tagName
      );

      const dataForSelectList = data.data.map<SelectOptions>((item) => {
        return { label: item.name, value: item.name };
      });

      return dataForSelectList;
    } catch (e) {
      return [{ label: "Ошибка сервера", value: "" }];
    }
  }
}

export const tagsService = new TagsService();
