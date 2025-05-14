export type Case = {
  id: number;
  title: string;
  slug: string;
  category: string;
  description?: string;
  imagePath: string;
  additionalImages?: string[];
};
