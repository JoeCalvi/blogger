<template>
  <h1>Here's my data baby</h1>
</template>

<script>
import { onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { blogsService } from '../services/BlogsService.js'

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

    return {}
  }
}
</script>

<style scoped lang="scss">

</style>
