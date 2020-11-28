import { Profile } from './profile.model';

export class Article {
  slug: string;
  title: string = '';
  description: string = '';
  body: string = '';
  picture: string = '';
  tagList: string[] = [];
  section: string;
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Profile;
}
