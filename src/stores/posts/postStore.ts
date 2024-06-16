import { defineStore } from 'pinia';
import type { CreatePostDTO, Post, UpdatePostDTO } from '@/services/posts/types';
import { API } from '@/services';
import { AxiosError } from 'axios';

export const usePostStore = defineStore('post', {
  state: () => {
    return {
      posts: [] as Post[]
    };
  },

  getters: {
    getPostById: (state) => {
      return (postId: number) => state.posts.find((p) => p.id, postId);
    }
  },

  actions: {
    initPosts(data: Post[]) {
      this.posts = data;
    },

    addPost(post: Post) {
      this.posts.push(post);
    },

    updatePost(post: Post) {
      const idx = this.posts.findIndex((p) => p.id === post.id);
      if (idx === -1) return;

      this.posts[idx] = post;
    },

    removePost(id: number) {
      const idx = this.posts.findIndex((p) => p.id === id);
      if (idx === -1) return;

      this.posts.splice(idx, 1);
    },

    async dispatchGetPosts() {
      try {
        const { status, data } = await API.posts.getPosts();

        if (status === 200) {
          this.initPosts(data);
          return {
            status
          };
        }
      } catch (error) {
        const _error = error as AxiosError<string>;

        return {
          status: _error.response?.status
        };
      }
    },

    async dispatchGetPostById(id: number) {
      try {
        const { status, data } = await API.posts.getPostById(id);

        if (status === 200) {
          this.addPost(data);
          return {
            status
          };
        }
      } catch (error) {
        const _error = error as AxiosError<string>;

        return {
          status: _error.response?.status
        };
      }
    },

    async dispatchCreatePost(newPost: CreatePostDTO) {
      try {
        const { status, data } = await API.posts.createPost(newPost);

        if (status === 201) {
          this.addPost(data);
          return {
            status
          };
        }
      } catch (error) {
        const _error = error as AxiosError<string>;

        return {
          status: _error.response?.status
        };
      }
    },

    async dispatchUpdatePost(updatedPost: UpdatePostDTO) {
      try {
        const { status, data } = await API.posts.updatePost(updatedPost);

        console.log({ status, data });

        if (status === 200) {
          this.updatePost(data);
          return {
            status
          };
        }
      } catch (error) {
        const _error = error as AxiosError<string>;

        return {
          status: _error.response?.status
        };
      }
    },

    async dispatchDeletePost(id: number) {
      try {
        const { status } = await API.posts.deletePost(id);

        if (status === 200) {
          this.removePost(id);
          return {
            status
          };
        }
      } catch (error) {
        const _error = error as AxiosError<string>;

        return {
          status: _error.response?.status
        };
      }
    }
  }
});
