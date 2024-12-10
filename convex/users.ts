import { mutation, query } from "./_generated/server"
import { v } from "convex/values"

export const getUser = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .first()
  },
})

export const createUser = mutation({
  args: { email: v.string(), name: v.string(), image: v.optional(v.string()) },
  handler: async (ctx, args) => {
    return await ctx.db.insert("users", {
      email: args.email,
      name: args.name,
      image: args.image,
      notifications: [],
      bookmarks: [],
      following: [],
    })
  },
})

export const addNotification = mutation({
  args: {
    userId: v.string(),
    notification: v.object({
      id: v.string(),
      type: v.string(),
      title: v.string(),
      description: v.string(),
      read: v.boolean(),
      createdAt: v.number(),
    }),
  },
  handler: async (ctx, args) => {
    // const user = await ctx.db.get(args.userId)
    // if (!user) return null
    // return await ctx.db.patch(args.userId, {
    //   notifications: [...user.notifications, args.notification],
    // })
  },
})

