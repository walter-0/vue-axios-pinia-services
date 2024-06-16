import { setActivePinia, createPinia } from 'pinia';
import { usePostStore } from './postStore';
import { beforeEach, describe, expect, it } from 'vitest';
import type { CreatePostDTO, UpdatePostDTO } from '@/services/posts/types';

describe('Post Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('Gets posts', async () => {
    const postStore = usePostStore();

    expect(postStore.posts.length).toBe(0);

    await postStore.dispatchGetPosts();

    expect(postStore.posts.length).toBe(100);
  });

  it('Gets a single post by id', async () => {
    const postStore = usePostStore();
    const id = 1;

    expect(postStore.posts.length).toBe(0);

    await postStore.dispatchGetPostById(id);
    const post = postStore.posts.find((p) => p.id === id);

    expect(post).toBeDefined();
    expect(post).toHaveProperty('id', id);
  });

  it('Creates a new post', async () => {
    const postStore = usePostStore();
    const newPost: CreatePostDTO = {
      userId: 10,
      title: 'new post',
      body: 'post body'
    };

    expect(postStore.posts.length).toBe(0);

    await postStore.dispatchCreatePost(newPost);
    const post = postStore.posts.find((p) => p.userId === newPost.userId);

    expect(postStore.posts.length).toBe(1);
    expect(post).toBeDefined();
    expect(post).toHaveProperty('title', newPost.title);
    expect(post).toHaveProperty('body', newPost.body);
  });

  it('Updates an existing post', async () => {
    const postStore = usePostStore();
    const postId = 1;
    const finalPost: UpdatePostDTO = {
      userId: 1,
      id: postId,
      title: 'a new and better post',
      body: 'post body'
    };

    expect(postStore.posts.length).toBe(0);

    await postStore.dispatchGetPostById(postId);

    expect(postStore.posts.length).toBe(1);

    await postStore.dispatchUpdatePost(finalPost);

    const updatedPost = postStore.getPostById(postId);

    expect(updatedPost).toHaveProperty('title', finalPost.title);
    expect(updatedPost).toHaveProperty('body', finalPost.body);
  });

  it('Deletes an existing post', async () => {
    const postStore = usePostStore();
    const postId = 1;

    expect(postStore.posts.length).toBe(0);

    await postStore.dispatchGetPostById(postId);

    expect(postStore.posts.length).toBe(1);

    await postStore.dispatchDeletePost(postId);

    expect(postStore.posts.length).toBe(0);
  });
});
