"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { menuCategories } from "@/lib/menu-data";

function cx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((name) => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  const isActiveLink = (href: string) => pathname === href;

  return (
    <div ref={menuRef}>
      {/* Hamburger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center rounded-sm border-2 border-stone-200 bg-stone-50 p-2 transition hover:border-stone-300 hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-800 dark:hover:border-stone-600 dark:hover:bg-stone-700"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <X size={20} className="text-stone-600 dark:text-stone-400" />
        ) : (
          <Menu size={20} className="text-stone-600 dark:text-stone-400" />
        )}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Menu */}
      <div
        className={cx(
          "fixed left-0 top-0 z-50 h-full w-80 max-w-[85vw] transform overflow-y-auto bg-white shadow-xl transition-transform duration-300 ease-in-out dark:bg-stone-900",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Menu Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-stone-200 bg-white px-4 py-4 dark:border-stone-700 dark:bg-stone-900">
          <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
            Menu
          </h2>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-sm p-1 text-stone-500 transition hover:bg-stone-100 hover:text-stone-700 dark:hover:bg-stone-800 dark:hover:text-stone-300"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu Categories */}
        <div className="p-4">
          {menuCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <div key={category.name} className="mb-2">
                {/* Category Header */}
                <button
                  type="button"
                  onClick={() => toggleCategory(category.name)}
                  className="flex w-full items-center justify-between rounded-sm px-3 py-2.5 text-left transition hover:bg-stone-100 dark:hover:bg-stone-800"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#1a365d] dark:text-amber-400">
                      <CategoryIcon size={18} />
                    </span>
                    <span className="font-medium text-stone-900 dark:text-stone-100">
                      {category.name}
                    </span>
                  </div>
                  <ChevronDown
                    size={16}
                    className={cx(
                      "text-stone-400 transition-transform duration-200",
                      expandedCategories.includes(category.name) && "rotate-180"
                    )}
                  />
                </button>

                {/* Category Items */}
                {expandedCategories.includes(category.name) && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-stone-200 pl-4 dark:border-stone-700">
                    {category.items.map((item) => {
                      const ItemIcon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cx(
                            "flex items-start gap-3 rounded-sm px-3 py-2 transition",
                            isActiveLink(item.href)
                              ? "bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400"
                              : "text-stone-600 hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-stone-800"
                          )}
                        >
                          <span className="mt-0.5 flex-shrink-0">
                            <ItemIcon size={16} />
                          </span>
                          <div>
                            <div className="text-sm font-medium">{item.name}</div>
                            {item.description && (
                              <div className="text-xs text-stone-500 dark:text-stone-500">
                                {item.description}
                              </div>
                            )}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="border-t border-stone-200 p-4 dark:border-stone-700">
          <Link
            href="/dashboard"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 rounded-sm bg-[#1a365d] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2d4a7c] dark:bg-amber-500 dark:text-stone-900 dark:hover:bg-amber-400"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
