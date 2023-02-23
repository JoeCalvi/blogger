<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-4" v-for="b in blogs">
        <BlogCard :blog="b" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import Pop from '../utils/Pop.js';
import { blogsService } from '../services/BlogsService.js'
import { AppState } from '../AppState.js';

export default {
  setup() {
    async function getBlogs() {
      try {
        await blogsService.getBlogs()
      } catch (error) {
        Pop.error('getting blogs', error)
      }
    }

    onMounted(() => getBlogs())

    return {
      blogs: computed(() => AppState.blogs)
    }
  }
}
</script>

<style scoped lang="scss">

.blog-img{
  height: 40vh;
  width: 100%;
  object-fit: cover;
}

.blog-post{
  background-image: url('https://pbs.twimg.com/profile_images/704028352152215553/8JKiR5mp_400x400.jpg');
  object-fit: cover;
  text-shadow: 1px 2px 2px rgb(202, 219, 76);
}

.creator-img{
  height: 10vh;
  width: 10vh;
}

</style>
