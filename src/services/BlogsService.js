import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
import { Blog } from "../models/Blog.js"

class BlogsService {
    async getBlogs() {
        const res = await api.get('api/blogs')
        AppState.blogs = res.data.map(b => new Blog(b))
        logger.log(AppState.blogs)
    }

    async getBlogById(blogId) {
        const res = await api.get('api/blogs/' + blogId)
        AppState.blog = new Blog(res.data)
    }

    setActiveBlog(blog) {
        AppState.blog = blog
        logger.log(AppState.blog)
    }
}

export const blogsService = new BlogsService()