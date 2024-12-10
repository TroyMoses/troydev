import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    image: v.optional(v.string()),
    notifications: v.array(
      v.object({
        id: v.string(),
        type: v.string(),
        title: v.string(),
        description: v.string(),
        read: v.boolean(),
        createdAt: v.number(),
      })
    ),
    bookmarks: v.array(v.string()),
    following: v.array(v.string()),
  }),
  posts: defineTable({
    title: v.string(),
    description: v.string(),
    url: v.string(),
    image: v.optional(v.string()),
    author: v.string(),
    likes: v.number(),
    comments: v.array(v.string()),
    createdAt: v.number(),
  }),
})

