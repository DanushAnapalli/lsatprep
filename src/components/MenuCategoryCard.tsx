"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import type { MenuCategory } from "@/lib/menu-data";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

interface MenuCategoryCardProps {
  category: MenuCategory;
}

export default function MenuCategoryCard({ category }: MenuCategoryCardProps) {
  const pathname = usePathname();
  const Icon = category.icon;

  const isActiveLink = (href: string) => pathname === href;

  return (
    <article
      className="group rounded-sm border-2 border-stone-200 bg-white p-6 transition-all duration-300 hover:border-[#1a365d] hover:shadow-lg dark:border-stone-700 dark:bg-stone-900 dark:hover:border-amber-500"
      aria-labelledby={`category-${category.name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {/* Category Header */}
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-sm bg-stone-100 p-3 transition-colors group-hover:bg-[#1a365d]/10 dark:bg-stone-800 dark:group-hover:bg-amber-500/10">
          <Icon
            size={28}
            className="text-[#1a365d] dark:text-amber-400"
            aria-hidden="true"
          />
        </div>
        <h3
          id={`category-${category.name.toLowerCase().replace(/\s+/g, "-")}`}
          className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100"
        >
          {category.name}
        </h3>
      </div>

      {/* Category Description */}
      <p className="mb-5 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
        {category.description}
      </p>

      {/* Links List */}
      <nav aria-label={`${category.name} links`}>
        <ul className="space-y-2">
          {category.items.map((item) => {
            const ItemIcon = item.icon;
            const isActive = isActiveLink(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cx(
                    "flex items-center gap-3 rounded-sm px-3 py-2.5 transition-all duration-200",
                    "focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:ring-offset-2 dark:focus:ring-amber-500 dark:focus:ring-offset-stone-900",
                    isActive
                      ? "bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400"
                      : "text-stone-700 hover:bg-stone-100 hover:text-[#1a365d] dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-amber-400"
                  )}
                >
                  <ItemIcon
                    size={18}
                    className={cx(
                      "flex-shrink-0 transition-colors",
                      isActive
                        ? "text-amber-600 dark:text-amber-400"
                        : "text-stone-400 group-hover:text-[#1a365d] dark:group-hover:text-amber-400"
                    )}
                    aria-hidden="true"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium">{item.name}</div>
                    {item.description && (
                      <div className="truncate text-xs text-stone-500 dark:text-stone-500">
                        {item.description}
                      </div>
                    )}
                  </div>
                  <ChevronRight
                    size={16}
                    className={cx(
                      "flex-shrink-0 transition-transform",
                      isActive
                        ? "text-amber-500"
                        : "text-stone-300 dark:text-stone-600"
                    )}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </article>
  );
}
