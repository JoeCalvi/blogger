<template>
    <div class="BlogPage">
<h1>this is the blog you selected</h1>

    </div>
</template>


<script>
import { useRoute } from 'vue-router';
import { blogsService } from '../services/BlogsService.js';

export default {
    setup(){
        const route = useRoute()

        async function getBlogById() {
            const blogId = route.params.blogId
            await blogsService.getBlogById(blogId)
        }
        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>