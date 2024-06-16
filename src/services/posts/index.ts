import { axiosInstance } from '@/services/api';
import type { Post, CreatePostDTO, UpdatePostDTO } from './types';

const getPosts = async () => {
  return await axiosInstance.get<Post[]>('posts');
};

const getPostById = async (id: number) => {
  return await axiosInstance.get<Post>(`posts/${id}`);
};

const createPost = async (newPost: CreatePostDTO) => {
  return await axiosInstance.post<Post>('posts', newPost);
};

const updatePost = async (updatedPost: UpdatePostDTO) => {
  return await axiosInstance.put<Post>(`posts/${updatedPost.id}`, updatedPost);
};

const deletePost = async (id: number) => {
  return await axiosInstance.delete<Post>(`posts/${id}`);
};

export const PostService = {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};
