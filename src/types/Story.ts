
export interface Author {
  id: string;
  name: string;
  title: string;
  avatar: string;
}

export interface Story {
  id: string;
  title: string;
  content: string;
  lessonLearned?: string;
  author: Author;
  category: 'career' | 'startup' | 'technical' | 'personal';
  timeAgo: string;
  likes: number;
  comments: number;
  views: string;
}
