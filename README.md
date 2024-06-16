# vue-axios-pinia-services

This is a minimal example of how to use Pinia and Axios to implement a type safe service layer between a Vue 3 application and a REST API. To use this pattern in your own application, you can just copy and paste the entire `posts/` directories in `services/` and `stores/` then rename to a different API resource (e.g. Users, Comments), then define your types.

To initiate a request, call one of the actions from the store.

- dispatchGetPosts
- dispatchGetPostById
- dispatchCreatePost
- dispatchUpdatePost
- dispatchDeletePost

Run the app to make a request to [JSONPlaceholder](https://jsonplaceholder.typicode.com)

The tests are setup to use the live JSONPlaceholder site, but the API responses can also be mocked if necessary.

More discussion of this approach [in this article](https://medium.com/@bugintheconsole/axios-vue-js-3-pinia-a-comfy-configuration-you-can-consider-for-an-api-rest-a6005c356dcd)

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
