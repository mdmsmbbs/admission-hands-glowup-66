
export interface RecommendedCollege {
  id: string;
  name: string;
  image: string;
  location: string;
  fees: string;
  seats: number;
  created_at?: string;
  updated_at?: string;
}

export interface DeemedUniversity {
  id: string;
  name: string;
  image_url: string;
  location: string;
  fees_range: string;
  seats: number;
  ranking: string;
  created_at?: string;
  updated_at?: string;
}
