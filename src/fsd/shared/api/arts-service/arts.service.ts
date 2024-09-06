class ArtsApi {
  private baseURL = `http://${process.env.NEXT_PUBLIC_DOMAIN_NAME}:${process.env.ARTS_AND_TAGS_PORT}/arts/`;
  private tagsURL = `${this.baseURL + "tags/"}`;
  async getTags() {
    console.log(1111);
  }
}
export const artsService = new ArtsApi();
