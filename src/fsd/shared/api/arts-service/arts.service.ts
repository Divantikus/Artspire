import axios from "axios";

class ArtsApi {
  private baseURL = `http://${process.env.NEXT_PUBLIC_DOMAIN_NAME}:${process.env.ARTS_AND_TAGS_PORT}/arts/tags/`;
}
export const artsService = new ArtsApi();
