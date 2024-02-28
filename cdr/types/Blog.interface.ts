interface BlogType {
  id: number;
  title: string;
  body: string;
  image: string;
  slug: string;
  author: number;
  author_username: string;
  short_intro: string;
  date_created: Date;
  thumbnail: string;
}

export default BlogType;
