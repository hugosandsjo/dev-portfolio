export type Case = {
  id: number;
  title: string;
  slug: string;
  category: string;
  description?: string;
  imagePath: string;
  additionalImages?: string[];
  aspectRatio: "16/10" | "1/1";
  website?: string;
  url?: string;
};
