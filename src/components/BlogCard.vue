<template>
    <div class="BlogCard">
        <div class="card blog-post blog-img my-3">
          <div class="card-body">
            <div class="row">
              <div class="col-12 d-flex align-items-center justify-content-between">
                <h5>{{ blog.title }}</h5>
                <img :src="blog.creator.picture" alt="" class="creator-img rounded-circle">
              </div>
            </div>
          </div>
        </div>
    </div>
</template>


<script>
import { Blog } from '../models/Blog.js';
import { computed } from 'vue'

export default {
    props: {
        blog: {
            type: Blog,
            required: true
        }
    },
    setup(props){
        return {
            backgroundImg: computed(() => `url('${props.blog.imgUrl}')`)
        }
    }
}
</script>


<style lang="scss" scoped>
.blog-post{
  background-image: v-bind(backgroundImg);
  background-position: center;
  object-fit: cover;
  text-shadow: 1px 2px 2px rgb(202, 219, 76);
}

.blog-img{
  height: 40vh;
  width: 100%;
  object-fit: cover;
}

.creator-img{
  height: 10vh;
  width: 10vh;
}
</style>