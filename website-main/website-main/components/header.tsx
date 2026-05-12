"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Manual RTL menu order and labels
const rtlNavItems = [
  { href: "/", label: "خانه" },
  { href: "/ba-lab", label: "BA Lab" },
  { href: "/content", label: "محتوا" },
  { href: "/about", label: "درباره من" },
  { href: "/contact", label: "تماس" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleNavigate = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-navy-900/80 backdrop-blur-md" dir="rtl">
      <div className="mx-auto flex flex-row-reverse max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo on the right */}
        <Link href="/" className="flex items-center gap-3" onClick={handleNavigate}>
          <div className="relative h-8 w-28 sm:h-9 sm:w-32">
            <Image src="/brand/logo.svg" alt="لوگو مهدی اشتری" fill priority className="object-contain" />
          </div>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm font-semibold text-white/80 md:flex">
          {rtlNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-1 transition-colors ${isActive ? "text-white" : "hover:text-white"}`}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute -bottom-2 inset-x-0 h-0.5 rounded-full bg-accent-500"
                    style={{ right: 0, left: 0 }} // ensure underline spans RTL
                  />
                )}
              </Link>
            );
          })}
        </nav>
        {/* Mobile menu button (on the left in RTL) */}
        <button
          type="button"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white hover:border-white/30 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">منو</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span className={`block h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>
      {/* Mobile menu (RTL, links right aligned) */}
      {open && (
        <div className="border-t border-white/5 bg-surface-900/90 backdrop-blur-lg md:hidden" dir="rtl">
          <nav className="mx-auto flex max-w-6xl flex-col items-end px-4 py-3 sm:px-6 lg:px-8">
            {rtlNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-3 text-base font-semibold ${
                    isActive ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                  onClick={handleNavigate}
                  style={{ textAlign: "right", width: "100%" }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
