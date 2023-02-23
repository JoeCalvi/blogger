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

</style>
