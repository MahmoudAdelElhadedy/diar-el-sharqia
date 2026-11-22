export type ProjectCategory = 'all' | 'contracting' | 'real-estate' | 'landscape';

export interface Project {
  id: string;
  title: string;
  category: 'contracting' | 'real-estate' | 'landscape';
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
