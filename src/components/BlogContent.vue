<template>
    <div class="BlogContent">
        <div class="container-fluid">
            <div v-if="blog" class="row m-0">
                <div class="col-12 m-auto">
                    <img :src="blog.imgUrl" alt="">
                </div>
                <div class="row justify-content-center">
                    <div class="col-10 mt-3">
                        <h3 class="text-center">{{ blog.title }}</h3>
                        <p>{{ blog.body }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

import { computed } from 'vue'
import { AppState } from '../AppState.js';
import { Blog } from '../models/Blog.js';

export default {
    props: {
        blog: {
            type: Blog,
            required: true
        } 
    },
    setup(){
        return {
            blog: computed(() => AppState.blog)
        }
    }
}
</script>


<style lang="scss" scoped>

img{
    object-fit: cover;
    width: 100%;
}

</style>