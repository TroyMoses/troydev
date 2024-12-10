"use client"

import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
// import { UserButton } from "@clerk/nextjs"
import { api } from "../../convex/_generated/api";
import { useQuery } from "convex/react"
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">daily.dev</span>
            </Link>
            <MainNav />
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button variant="outline" className="ml-auto">
                New post
              </Button>
            </div>
            {/* <UserButton afterSignOutUrl="/" /> */}
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container grid gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr]">
          <aside className="hidden w-[200px] flex-col md:flex lg:w-[240px]">
            <nav className="grid items-start gap-2">
              {/* Add sidebar items here */}
            </nav>
          </aside>
          <main className="flex w-full flex-1 flex-col overflow-hidden">
            <Posts />
          </main>
        </div>
      </main>
    </div>
  )
}

function Posts() {
  const posts = useQuery(api.posts.list)

  if (!posts) return <div>Loading...</div>

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post._id} className="rounded-lg border p-4">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-gray-500">{post.description}</p>
        </div>
      ))}
    </div>
  )
}

