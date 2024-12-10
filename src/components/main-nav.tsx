"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BookMarked, History, Home, Network, Search, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";

export function MainNav() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "My Feed",
      icon: Home,
      active: pathname === "/",
    },
    {
      href: "/following",
      label: "Following",
      icon: Users,
      active: pathname === "/following",
    },
    {
      href: "/bookmarks",
      label: "Bookmarks",
      icon: BookMarked,
      active: pathname === "/bookmarks",
    },
    {
      href: "/history",
      label: "History",
      icon: History,
      active: pathname === "/history",
    },
    {
      href: "/network",
      label: "Network",
      icon: Network,
      active: pathname === "/network",
    },
  ]

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          <route.icon className="h-4 w-4" />
          <span className="sr-only">{route.label}</span>
        </Link>
      ))}
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
      >
        <Search className="h-4 w-4 xl:mr-2" />
        <span className="hidden xl:inline-flex">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
          <span className="text-xs">Ctrl</span>K
        </kbd>
      </Button>
    </nav>
  )
}

