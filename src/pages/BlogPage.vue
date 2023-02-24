<template>
    <div class="BlogPage">
       <BlogContent :blog="blog" />
    </div>
</template>


<script>
import { useRoute } from 'vue-router';
import { Blog } from '../models/Blog.js';
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