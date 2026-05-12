/**
 * This file defines the main page ("/") of the application, which serves as the homepage of the project.
 * 
 * It uses Next.js's app directory architecture. As such, `app/page.tsx` acts as the entry point
 * for the root route (i.e., domain.com/).
 * 
 * Key Elements:
 * - Imports UI components such as `Button`, `Card`, and `Container` from the project's component library.
 * - Imports `Link` from Next.js for client-side routing.
 * - Imports `writings` data (presumably an array of content objects) from the local data module.
 * 
 * The main `HomePage` function renders:
 *  1. A hero section introducing the BA Lab (Business Analysis Lab) with a company tagline, branding, and call-to-action buttons.
 *  2. A visual display component, `HeroVisual`, giving context (using stylized UI) to daily business analysis concepts.
 *  3. A section listing recent writings, loaded from the `writings` dataset and rendered as summary cards.
 * 
 * Navigation is enabled by the `Button` and `Link` components, allowing users to enter the BA Lab
 * or view all written content. The use of Tailwind CSS utility classes ensures a visually modern, responsive design.
 * 
 * Integration with the Rest of the Project:
 * - Consumes shared UI components from "@/components".
 * - Accesses content/data from "@/lib/data".
 * - As `app/page.tsx`, this file is auto-registered as the main route in the Next.js application.
 * - It links to other routes such as `/ba-lab` and `/content`, leveraging the broader app structure.
 * 
 * The file does not manage state or data fetching; it assumes that the `writings` array is static or pre-fetched.
 * 
 * Below is the actual implementation of the home page component and its supporting visual component:
 */

import Link from "next/link";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { writings } from "@/lib/data";

// The root page component for the "/" route.
export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <Container className="grid gap-12 py-16 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white/70">
              تمرکز روی تصمیم‌سازی و تحلیل کسب‌وکار
            </p>
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl">BA Lab</h1>
              <p className="max-w-xl text-lg leading-relaxed text-white/80">
                آموزشی، کاربردی و روزمره؛
                <br />
                جایی برای ارتقای تصمیم‌سازی و تحلیل کسب‌وکار بر اساس BABOK.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/ba-lab">ورود به BA Lab</Button>
              <Link href="#writings" className="text-sm font-semibold text-white/70 hover:text-white">
                مشاهده نوشته‌های اخیر
              </Link>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/60">
              <div className="h-1.5 w-1.5 rounded-full bg-accent-500 shadow-[0_0_0_6px_rgba(251,191,36,0.2)]" />
              یادگیری اجراپذیر برای مدیران و تحلیلگران محصول
            </div>
          </div>
          <HeroVisual />
        </Container>
      </section>

      <section id="writings" className="py-10">
        <Container>
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">نوشته‌های اخیر</h2>
              <p className="mt-2 text-sm text-white/70">مروری کوتاه بر یادداشت‌ها و تجربیات روزمره.</p>
            </div>
            <Link href="/content" className="text-sm font-semibold text-accent-500 hover:text-accent-600">
              مشاهده همه
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {writings.map((item) => (
              <Card key={item.title} title={item.title} description={item.excerpt} href="/content" />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

// A decorative/visual component for the hero section.
function HeroVisual() {
  return (
    <div className="relative isolate overflow-hidden rounded-3xl border border-white/5 bg-surface-900/70 p-8 shadow-card">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-accent-500/10 opacity-70" />
      <div className="relative flex h-full flex-col justify-between gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 rounded-full bg-white/5 px-3 py-2 text-xs text-white/80">
            <div className="h-2 w-2 rounded-full bg-green-400" />
            <span>BABOK insights</span>
          </div>
          <div className="rounded-full bg-accent-500/15 px-3 py-1 text-xs font-semibold text-accent-500">
            Daily BA
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
            <div className="mb-3 flex items-center justify-between text-xs text-white/60">
              <span>چک‌لیست تصمیم</span>
              <span>Today</span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent-500 shadow-glow" />
                هم‌راستایی ذی‌نفعان
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/60" />
                تعریف نتیجه قابل اندازه‌گیری
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/60" />
                سنجش ریسک و گزینه‌های جایگزین
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
            <div className="space-y-1">
              <p className="text-xs text-white/60">نمودار تصمیم</p>
              <p className="font-semibold text-white">اثر/پیچیدگی</p>
            </div>
            <div className="relative h-24 w-32 rounded-xl bg-gradient-to-tr from-navy-800 to-surface-900">
              <div className="absolute inset-3 rounded-lg border border-white/10" />
              <div className="absolute left-8 top-4 h-16 w-16 rotate-[-12deg] rounded-lg bg-accent-500/20 shadow-glow" />
              <div className="absolute right-6 bottom-4 h-10 w-10 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-gradient-to-r from-accent-500/15 to-white/5 px-4 py-3 text-xs text-white/80">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent-500" />
            امتیاز آمادگی تحلیل
          </div>
          <div className="flex items-center gap-2 font-semibold text-white">
            87%
            <span className="text-[10px] text-white/60">updated now</span>
          </div>
        </div>
      </div>
    </div>
  );
}
