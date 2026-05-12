import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  href?: string;
}

export function Card({ title, description, icon, href }: CardProps) {
  const content = (
    <div className="card-base flex h-full flex-col gap-4 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/15 text-accent-500">
          {icon ?? <DefaultIcon />}
        </div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <p className="text-sm text-white/70 leading-relaxed">{description}</p>
      <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-accent-500">
        جزئیات بیشتر
        <span aria-hidden className="text-xs">↗</span>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}

function DefaultIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <path
        d="M4 15c0-1.657 1.79-3 4-3s4 1.343 4 3-1.79 3-4 3-4-1.343-4-3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13.5a4 4 0 1 1 8 0c0 2.5-2 2-2 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M8 8V4m0 0L6 6m2-2 2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
