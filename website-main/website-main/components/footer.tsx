import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5 bg-surface-900/80 py-10 text-sm text-white/70 backdrop-blur-md">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-28 sm:h-9 sm:w-32">
            <Image src="/brand/logo.svg" alt="لوگو" fill className="object-contain" />
          </div>
          <p className="text-white/70">تحلیل تصمیم‌محور برای خروجی اجراپذیر</p>
        </div>
        <div className="flex items-center gap-4 text-white/70">
          <Link href="mailto:hello@mehdiashtari.com" className="hover:text-white" aria-label="ایمیل">
            <MailIcon />
          </Link>
          <Link
            href="https://www.linkedin.com"
            className="hover:text-white"
            aria-label="لینکدین"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </Link>
          <span className="text-xs text-white/50">© {new Date().getFullYear()} Mehdi Ashtari</span>
        </div>
      </Container>
    </footer>
  );
}

function MailIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 7.5c0-.83.67-1.5 1.5-1.5h13c.83 0 1.5.67 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16.5v-9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="m6 8 6 4 6-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.94 9.75V17m10-3.25c0-1.795-.78-3.25-2.75-3.25-1.284 0-2.033.592-2.406 1.25V9.75h-2.25V17h2.25v-3.25c0-.884.716-1.6 1.6-1.6.883 0 1.306.716 1.306 1.6V17h2.25v-3.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="6.94" cy="6.94" r="1.19" fill="currentColor" />
    </svg>
  );
}
