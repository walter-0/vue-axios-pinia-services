<script setup lang="ts">
import { usePostStore } from '@/stores/posts/postStore';

const postStore = usePostStore();

const getPost = () => {
  postStore.dispatchGetPostById(18097);
};
</script>

<template>
  <h1>Vue Axios Pinia Services Template</h1>
  <button @click="getPost">Get a post</button>
  <div>{{ postStore.posts }}</div>
</template>
