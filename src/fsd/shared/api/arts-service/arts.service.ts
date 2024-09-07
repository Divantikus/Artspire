import { SelectOptions } from "@shared/ui/index";

class ArtsApi {
  private baseURL = `http://${process.env.NEXT_PUBLIC_DOMAIN_NAME}:${process.env.ARTS_AND_TAGS_PORT}/arts/`;
  private tagsURL = `${this.baseURL + "tags/"}`;
  async getTags() {
    return [{ label: "someeee", value: "someee" } satisfies SelectOptions];
  }
}
export const artsService = new ArtsApi();
