export interface Tag {
  id: number;
  name: string;
}

export interface PublicationData {
  id: number;
  url: string;
  user_id: number;
  blob_name: string;
  tags: Tag[] | null;
  likes_count: number;
  title: string | null;
  url_generated_at: string;
  created_at: string | null;
}
