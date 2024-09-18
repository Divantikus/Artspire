export interface PublicationData {
  id: number;
  user_id: number;
  blob_name: string;
  url: string;
  url_generated_at: string;
  title: string;
  likes_count: number;
  tags: string[] | null;
  created_at: string;
}
