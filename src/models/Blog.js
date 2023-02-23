import { Creator } from "./Creator.js"

export class Blog {
    constructor(data) {
        this.id = data.id
        this.creatorId = data.creatorId
        this.creator = new Creator(data.creator)
        this.title = data.title
        this.body = data.body
        this.imgUrl = data.imgUrl
        this.published = data.published
    }
}