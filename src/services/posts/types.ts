export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type CreatePostDTO = {
  userId: number;
  title: string;
  body: string;
};

export type UpdatePostDTO = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
