export interface Experience {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  coverImage: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
