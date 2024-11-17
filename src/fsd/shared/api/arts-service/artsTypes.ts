export interface Tag {
  id: number;
  name: string;
}
export interface ShortArtInfo {
  id: number;
  url: string;
  is_liked: boolean;
}

export interface PublicationData extends ShortArtInfo {
  id: number;
  user_id: number;
  username: string;
  blob_name: string;
  tags: Tag[] | null;
  likes_count: number;
  title: string | null;
  url_generated_at: string;
  created_at: string | null;
}
