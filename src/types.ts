export interface ImageAsset {
  id: string;
  url: string;
  title: string;
  author: string;
  tags: string[];
  downloads: number;
  likes: number;
  aspectRatio: 'square' | 'video' | 'portrait';
}
