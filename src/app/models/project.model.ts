export type ProjectCategory = 'all' | 'real-estate' | 'contracting' | 'agriculture';

export interface Project {
  id: string;
  title: string;
  category: 'real-estate' | 'contracting' | 'agriculture';
  categoryLabel: string;
  summary: string;
  description: string;
  location: string;
  area: string;
  year: string;
  client: string;
  status: string;
  imageUrl: string;
  gallery: string[];
  features: string[];
}
